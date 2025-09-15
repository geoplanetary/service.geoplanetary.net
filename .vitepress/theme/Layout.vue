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
	console.log(
		'%c- 警告 -%c あなたの貼り付けようとしているものが何かを正確に理解していないなら、何かを貼り付ける前に今すぐこの画面を閉じてください。\n' +
		'%cあなたのアクセスするサイトにかかわらず、何らかの報酬の約束とともに受け取った文字列は間違いなく%cあなたのアカウントやクレジットカード情報などの個人情報を詐取%cしたり、あなたのデバイスを用いてマルウェアを拡散するためのスクリプトです。' +
		'この攻撃手法は Self-XSS (自己XSS) として知られています。' +
		'ほとんどの場合この画面を使うことはありませんし、この画面を開くことを指示することもありません。 \n' +
		'貼り付けたものが悪質なスクリプトだったとき、その%cスクリプトによる被害からあなたを守る手段はここから先には存在しません。これが最初で最後の警告です。' +
		'%c貼り付けようとしているものが何なのか、この画面がなんのためにあるのかを理解していないなら、すぐにこの画面を閉じましょう。\n' +
		'%c詳しくはmisskey-hubの記事を参考にしてください: https://misskey-hub.net/docs/for-users/resources/self-xss/',
		'font-size: 2rem; font-family: sans-serif; color: red; background: yellow;',
		'font-size: 2rem; font-family: sans-serif; color: white; background: red;',
		'font-size: 1.5rem; font-family: sans-serif;',
		'font-size: 1.5rem; font-family: sans-serif; color: white; background: red;',
		'font-size: 1.5rem; font-family: sans-serif;',
		'font-size: 1.5rem; font-family: sans-serif; color: white; background: red;',
		'font-size: 1.5rem; font-family: sans-serif;',
		'font-family: sans-serif;'
	);

	navHidden.value = responsive.isNarrowView.value;
})
</script>
