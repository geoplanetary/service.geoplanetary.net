<template>
	<header class="page-banner">
		<div class="layout">
			<div :class="['nav-spacer', props.navHidden ? 'nav-hidden' : undefined]"></div>
			<a class="site-title" href="/">{{ site.title }}</a>
			<div class="sp"></div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
	navHidden: boolean;
}>(), {
});

const { site } = useData()
</script>

<style lang="css" scoped>
.page-banner {
	display: block;
}

.page-banner .layout {
	display: flex;
	width: auto;
	height: 64px;
	margin-inline: 24px;
	flex-flow: row;
	align-items: center;
	gap: 16px;
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
