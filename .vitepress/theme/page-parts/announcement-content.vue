<template>
	<SiteBanner :nav-hidden="props.navHidden" />
	<main class="main-content">
		<h1>お知らせ</h1>
		<ErrorCard title="情報の取得に失敗しました" v-if="announcements.status.value === 'error'">
			しばらくしてから、アクセスしなおしてください。
		</ErrorCard>
		<CardPanel v-if="announcements.status.value === 'done'" v-for="announce in announcements.announcements.value"
			:key="announce.id" :href="announce.url">
			<div class="title">{{ announce.title }}</div>
			<div class="content">
				<mfm :value="announce.content" />
			</div>
			<div v-if="announce.createDate !== undefined" class="props">作成
				<DateTip :date="announce.createDate" />
			</div>
			<div v-if="announce.mofifyDate !== undefined" class="props">更新
				<DateTip :date="announce.mofifyDate" />
			</div>
			<div class="props">{{ announce.url.pathname }}</div>
		</CardPanel>
	</main>
</template>

<script setup lang="ts">
import CardPanel from '../components/card-panel.vue'
import DateTip from '../components/date-tip.vue';
import mfm from '../components/mfm';
import { useMisskeyAnnouncements } from '../composable/misskey';
import ErrorCard from './error-card.vue';
import SiteBanner from './site-banner.vue';
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
	navHidden: boolean;
}>(), {
});
const announcements = useMisskeyAnnouncements();
</script>

<style lang="css" scoped>
.main-content {
	width: min(800px, 95%);
	margin-inline: auto;
}

.title {
	font-size: 1.2rem;
	font-weight: 600;
}

.content {
	font-size: 14px;
	margin-block: 1em;
}

.props {
	font-size: 0.8rem;
	opacity: 0.7;
}
</style>
