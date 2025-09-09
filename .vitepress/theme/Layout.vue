<template>
	<SiteNavigationView v-model:nav-hidden="navHidden">
		<SiteBanner :layout="frontmatter.layout" :nav-hidden="navHidden" />
		<main v-if="frontmatter.layout === 'home'" class="main-content home">
				<Content />
		</main>
		<main v-else class="main-content">
			<article>
				<header>
					<h1>{{ frontmatter.title }}</h1>
				</header>
				<Content />
			</article>
		</main>
	</SiteNavigationView>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import SiteBanner from './page-parts/site-banner.vue';
import SiteNavigationView from './page-parts/site-navigation-view.vue';
import { ref } from 'vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()

const navHidden = ref<boolean>((visualViewport?.width ?? 0) < 800);
</script>

<style lang="css" scoped>
.main-content {
	width: min(800px, 95%);
	margin-inline: auto;
}

.main-content.home {
	width: min(1200px, 95%);
}
</style>
