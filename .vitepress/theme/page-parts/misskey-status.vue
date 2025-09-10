<template>
	<div class="misskey-status">
		<TransitionGroup>
			<KeyvaluePanel title="サーバー API" key="server-ping">
				<div class="status-value"><span class="num">{{ pingDuration ? pingDuration : '---' }}</span> ms
				</div>
			</KeyvaluePanel>
			<KeyvaluePanel v-if="totalUserCount !== undefined" title="総ユーザー数" key="total-users">
				<div class="status-value"><span class="num">{{ totalUserCount ? totalUserCount : '---' }}</span>
				</div>
			</KeyvaluePanel>
			<KeyvaluePanel v-if="onlineUserCount !== undefined" title="現在のアクティブユーザー" key="active-users">
				<div class="status-value"><span class="num">{{ onlineUserCount ? onlineUserCount : '---' }}</span>
				</div>
			</KeyvaluePanel>
			<KeyvaluePanel v-if="noteCount !== undefined" title="ローカルノート数" key="total-notes">
				<div class="status-value"><span class="num">{{ noteCount ? noteCount : '---' }}</span>
				</div>
			</KeyvaluePanel>
		</TransitionGroup>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import KeyvaluePanel from '../components/keyvalue-panel.vue';

const pingDuration = ref<number | undefined>(undefined);
const onlineUserCount = ref<number | undefined>(undefined);
const totalUserCount = ref<number | undefined>(undefined);
const noteCount = ref<number | undefined>(undefined);

var pingInterval: number | undefined = undefined;

async function update() {
	const start = Date.now();
	await fetch('https://geoplanetary.net/api/ping', { method: 'POST', body: '{}', headers: { "Content-Type": "application/json", }, }).then((v) => {
		if (!v.ok) { throw Error(); }
		return v.json();
	}).then((v) => {
		if (typeof v != 'object' || typeof v['pong'] != 'number') { throw Error(); }
		pingDuration.value = Date.now() - start;
	}).catch(() => {
		pingDuration.value = undefined;
	}).finally(() => {
		updateStats();
		updateOnlineUserCount();
	});
}

async function updateOnlineUserCount() {
	await fetch('https://geoplanetary.net/api/get-online-users-count', { method: 'POST', body: '{}', headers: { "Content-Type": "application/json", }, }).then((v) => {
		if (!v.ok) { throw Error(); }
		return v.json();
	}).then((v) => {
		if (typeof v != 'object' || typeof v['count'] != 'number') { throw Error(); }
		onlineUserCount.value = v['count'];
	}).catch(() => {
		onlineUserCount.value = undefined;
	});
}

async function updateStats() {
	await fetch('https://geoplanetary.net/api/stats', { method: 'POST', body: '{}', headers: { "Content-Type": "application/json", }, }).then((v) => {
		if (!v.ok) { throw Error(); }
		return v.json();
	}).then((v) => {
		if (typeof v != 'object') { throw Error(); }
		totalUserCount.value = typeof v['originalUsersCount'] == 'number' ? v['originalUsersCount'] : undefined;
		noteCount.value = typeof v['originalNotesCount'] == 'number' ? v['originalNotesCount'] : undefined;
	}).catch(() => {
		totalUserCount.value = undefined;
		noteCount.value = undefined;
	});
}

onMounted(() => {
	update();
	pingInterval = setInterval(update, 30000);
})
onUnmounted(() => {
	clearInterval(pingInterval);
	pingInterval = undefined;
})
</script>

<style lang="css" scoped>
.misskey-status {
	display: grid;
	border-radius: 16px;
	padding: 24px;
	background: var(--color--button-bg);
	color: var(--color--fg);
	gap: 1.5rem;
	overflow: hidden;
}

@media screen and (not (width < 1200px)) {
	.misskey-status {
		grid-template-columns: 1fr 1fr 1fr;
	}
}

@media screen and (not (width < 800px)) and (width < 1200px) {
	.misskey-status {
		grid-template-columns: 1fr 1fr;
	}
}

@media screen and (width < 800px) {
	.misskey-status {
		grid-template-columns: 1fr;
	}
}

.misskey-status>div .status-value {
	margin-block-start: 0.5rem;
	text-align: end;
	font-family: var(--font-family--monospace);
	font-size: 1.2rem;
}

.misskey-status>div .status-value>.num {
	font-size: 4rem;
}

.v-enter-active,
.v-leave-active {
	position: relative;
	transition: all 800ms cubic-bezier(0.215, 0.610, 0.355, 1)
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
