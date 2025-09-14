<template>
	<ResponsiveGrid class="misskey-status">
		<TransitionGroup>
			<KeyvaluePanel title="サーバー API" key="server-ping">
				<ValueItem :size="4" :value="miStatus.pingDuration.value" unit="ms" />
			</KeyvaluePanel>
			<KeyvaluePanel v-if="miStatus.totalUserCount.value !== undefined" title="総ユーザー数" key="total-users">
				<ValueItem :size="4" :value="miStatus.totalUserCount.value" />
			</KeyvaluePanel>
			<KeyvaluePanel v-if="miStatus.onlineUserCount.value !== undefined" title="現在のアクティブユーザー" key="active-users">
				<ValueItem :size="4" :value="miStatus.onlineUserCount.value" />
			</KeyvaluePanel>
			<KeyvaluePanel v-if="miStatus.noteCount.value !== undefined" title="ローカルノート数" key="total-notes">
				<ValueItem :size="4" :value="miStatus.noteCount.value" />
			</KeyvaluePanel>
		</TransitionGroup>
	</ResponsiveGrid>
</template>

<script setup lang="ts">
import KeyvaluePanel from '../components/keyvalue-panel.vue';
import ValueItem from '../components/value-item.vue';
import ResponsiveGrid from '../components/responsive-grid.vue';
import { useMisskeyStatus } from '../composable/misskey';

const miStatus = useMisskeyStatus();
</script>

<style lang="css" scoped>
.misskey-status {
	border-radius: 16px;
	padding: 24px;
	background: var(--color--button-bg);
	color: var(--color--fg);
	overflow: hidden;
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
