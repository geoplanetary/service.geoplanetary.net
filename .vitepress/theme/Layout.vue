<template>
	<SiteNavigationView v-model:nav-hidden="navHidden">
		<HomeContent v-if="frontmatter.layout === 'home'" />
		<AnnouncementContent v-else-if="frontmatter.layout === 'announcement'" :nav-hidden="navHidden" />
		<MainContent v-else :nav-hidden="navHidden" />
	</SiteNavigationView>
</template>

<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import SiteNavigationView from './page-parts/site-navigation-view.vue';
import { onMounted, ref } from 'vue';
import { useResponsive } from './composable/responsive';
import AnnouncementContent from './page-parts/announcement-content.vue';
import HomeContent from './page-parts/home-content.vue';
import MainContent from './page-parts/main-content.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData();
const router = useRouter();
const responsive = useResponsive();

const navHidden = ref<boolean>(true);

router.onAfterRouteChange = () => {
	navHidden.value = responsive.isNarrowView.value ? true : navHidden.value;
}
onMounted(() => {
	navHidden.value = responsive.isNarrowView.value;
})
</script>
