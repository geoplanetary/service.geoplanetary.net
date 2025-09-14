<template>
	<SiteBanner :nav-hidden="props.navHidden" />
	<main class="main-content">
		<PageHeader />
		<article>
			<Content />
		</article>
	</main>
</template>

<script setup lang="ts">
import PageHeader from './page-header.vue';
import SiteBanner from './site-banner.vue';
import { defineProps, withDefaults } from 'vue';

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
