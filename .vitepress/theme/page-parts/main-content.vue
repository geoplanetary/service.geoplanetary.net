<template>
	<SiteBanner :nav-hidden="props.navHidden" />
	<main class="main-content">
		<PageHeader />
		<article>
			<Content />
		</article>
		<SpaceSeparator v-if="related.entries.value.length" :height="20" />
		<section v-if="related.entries.value.length" id="foot--relative-pages">
			<h2>関連項目</h2>
			<div>
				<CardPanel v-for="entry in related.entries.value" :href="entry.href">
					<div style="font-size:1.2rem;font-weight:600;">{{ entry.title }}</div>
				</CardPanel>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import PageHeader from './page-header.vue';
import SiteBanner from './site-banner.vue';
import SpaceSeparator from '../components/space-separator.vue'
import CardPanel from '../components/card-panel.vue'
import { useRelativePages } from '../composable/relative-pages';

const related = useRelativePages();

const props = withDefaults(defineProps<{
	navHidden: boolean;
}>(), {
});
</script>

<style lang="css" scoped>
.main-content {
	width: min(800px, 95%);
	margin-inline: auto;
}
</style>
