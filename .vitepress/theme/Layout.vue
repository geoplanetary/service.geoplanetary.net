<template>
	<SiteNavigationView v-model:nav-hidden="navHidden">
		<SiteBanner :layout="frontmatter.layout" :nav-hidden="navHidden" />
		<main v-if="frontmatter.layout === 'home'" class="main-content home">
			<Content />
		</main>
		<main v-else class="main-content">
			<article>
				<PageHeader />
				<Content />
			</article>
			<div class="bottom-space"></div>
		</main>
	</SiteNavigationView>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import SiteBanner from './page-parts/site-banner.vue';
import SiteNavigationView from './page-parts/site-navigation-view.vue';
import { onMounted, ref } from 'vue';
import PageHeader from './page-parts/page-header.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData();

const navHidden = ref<boolean>(false);

onMounted(() => {
	// window はクライアントサイドにしか存在しないオブジェクトのため、クライアントでしか実行されないonMountedでしか呼び出せない
	navHidden.value = (window.visualViewport?.width ?? 0) < 800;
})
</script>

<style lang="css" scoped>
.main-content {
	width: min(800px, 95%);
	margin-inline: auto;
}

.main-content.home {
	width: min(1200px, 95%);
}

.bottom-space {
	height: 20rem;
}
</style>
