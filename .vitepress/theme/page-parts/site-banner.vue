<template>
	<header v-if="props.layout === 'home'" class="home-banner">
		<h1 class="site-title">{{ site.title }}</h1>
		<p class="site-description">{{ site.description }}</p>
		<ul>
			<li><a href="/markdown-examples.html">Markdown Examples</a></li>
			<li><a href="/api-examples.html">API Examples</a></li>
		</ul>
	</header>
	<header v-else class="page-banner">
		<div :class="['nav-spacer', props.navHidden ? 'nav-hidden' : undefined]"></div>
		<a class="site-title">{{ site.title }}</a>
		<div class="sp"></div>
	</header>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { defineProps, withDefaults } from 'vue';

export type SiteBannerLayouts = 'home' | any;

const props = withDefaults(defineProps<{
	layout?: SiteBannerLayouts;
	navHidden?: boolean;
}>(), {
	layout: 'default',
	navHidden: false,
});

const { site } = useData()
</script>

<style lang="css" scoped>
.home-banner {
	display: block;
	width: min(1200px, 95%);
	margin-block-start: 64px;
	margin-inline: auto;
	padding-block: 96px;
}

.home-banner .site-title {
	display: block;
	font: 600 3rem var(--font-family--default);
	color: var(--color--fg);
	overflow-wrap: break-word;
}

.home-banner .site-description {
	display: block;
	font: 1.5rem var(--font-family--default);
	color: var(--color--fg);
}

.page-banner {
	display: flex;
	width: auto;
	height: 64px;
	margin-inline: 24px;
	flex-flow: row;
	align-items: center;
}

.page-banner .site-title {
	display: inline-block;
	font: 600 1.5rem var(--font-family--default);
	color: var(--color--fg);
	overflow: hidden;
	text-overflow: ellipsis;
}

.page-banner .nav-spacer {
	transition: width 800ms cubic-bezier(0.075, 0.82, 0.165, 1);
	width: 0px;
}

@media screen and (min-width: 800px) {
	.page-banner .nav-spacer {
		width: 0px;
	}

	.page-banner .nav-spacer.nav-hidden {
		width: 64px;
	}
}

@media screen and not (min-width: 800px) {
	.page-banner .nav-spacer {
		width: 64px;
	}
}

.page-banner .sp {
	flex: 1;
}
</style>
