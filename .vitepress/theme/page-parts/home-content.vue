<template>
	<header class="site-banner">
		<div class="layout">
			<h1 class="site-title">{{ site.title }}</h1>
			<p class="site-description">{{ site.description }}</p>
			<MisskeyStatus />
			<p>
				<a href="https://geoplanetary.net/">
					<ButtonShape :primary="true">サービスにもどる</ButtonShape>
				</a>
			</p>
		</div>
	</header>
	<main class="main-content">
		<Content />
	</main>
</template>

<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import ButtonShape from '../components/button-shape.vue';
import MisskeyStatus from './misskey-status.vue';
import { onBeforeMount, watch } from 'vue';
const { site } = useData();
const router = useRouter();

function routeRedirectedResource(hash: string) {
	if (hash === '#/page/policies') {
		router.go('/server-rules/#policies', { replace: true });
	} else if (hash.startsWith('#/page/policies/')) {
		const leaf = hash.substring(16);
		router.go(leaf === '' ? '/server-rules/#policies' : '/policy/' + leaf, { replace: true });
	} else if (hash.startsWith('#/page/')) {
		const leaf = hash.substring(7);
		router.go('/' + leaf, { replace: true });
	}
}

watch(() => router.route.hash, (hash: string) => {
	routeRedirectedResource(hash);
})
onBeforeMount(() => {
	routeRedirectedResource(router.route.hash);
})
</script>

<style lang="css" scoped>
.main-content {
	width: min(1200px, 95%);
	margin-inline: auto;
}

.site-banner {
	display: block;
	padding-block-start: 64px;
}

.site-banner .layout {
	display: block;
	width: min(1200px, 95%);
	margin-inline: auto;
	padding-block: 96px;
}

.site-banner .site-title {
	display: block;
	font: 600 3rem var(--font-family--default);
	color: var(--color--fg);
	overflow-wrap: break-word;
}

.site-banner .site-description {
	display: block;
	font: 1.5rem var(--font-family--default);
	color: var(--color--fg);
}
</style>
