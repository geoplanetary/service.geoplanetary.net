<template>
	<MenuButton class="nav-disp" @activate="toggleNavHidden"></MenuButton>
	<transition>
		<div v-if="!navHidden" class="site-navigation">
			<nav class="nav-root">
				<NavigationButton href="/">
					<template v-slot:icon>
						<svg width="48" height="48" fill="none" stroke="var(--color--fg)" stroke-width="2px" stroke-linecap="round"
							stroke-linejoin="round">
							<path d="M24,8 l16,12 h-4 v16 h-24 v-16 h-4 z M24,24 a4,4 90 0 1 4,4 v8 h-8 v-8 a4,4 90 0 1 4,-4" />
						</svg>
					</template>
					ホーム
				</NavigationButton>
				<NavigationButton href="/announcement/">
					<template v-slot:icon>
						<svg width="48" height="48" fill="none" stroke="var(--color--fg)" stroke-width="2px" stroke-linecap="round"
							stroke-linejoin="round">
							<path d="M24,8 a16,16 180 1 1 0,32 16,16 180 1 1 0,-32 z M22,20 h2 v12 m-4,0 h8" />
							<path d="M24,15 a1,1 180 1 1 0,2 1,1 180 1 1 0,-2" fill="var(--color--fg)" stroke="none" />
						</svg>
					</template>
					お知らせ
				</NavigationButton>
				<NavigationButton href="/server-rules/">
					<template v-slot:icon>
						<svg width="48" height="48" viewBox="-24,-24 48,48" fill="none" stroke="var(--color--fg)" stroke-width="2px"
							stroke-linecap="round" stroke-linejoin="round">
							<path
								d="M10,-16 a4,4 90 0 1 4,4 v24 a4,4 90 0 1 -4,4 h-20 a4,4 90 0 1 -4,-4 v-24 a4,4 90 0 1 4,-4 z M-8,-10 h16 m-16,4 h16 m-16,4 h16 m-16,4 h16 m-16,4 h16 m-16,4 h8" />
						</svg>
					</template>
					規約とポリシー
				</NavigationButton>
				<NavigationButton href="/emoji/">
					<template v-slot:icon>
						<svg width="48" height="48" viewBox="-24,-24 48,48" fill="none" stroke="var(--color--fg)" stroke-width="2px"
							stroke-linecap="round" stroke-linejoin="round">
							<path
								d="M-10,-16 a6,6 180 0 1 0,12 6,6 180 0 1 0,-12 M4,-16 l12,12 m-12,0 l12,-12 M-16,4 h12 v12 h-12 z M10,4 l6,6 -6,6 -6,-6 6,-6" />
						</svg>
					</template>
					カスタム絵文字
				</NavigationButton>
				<NavigationButton href="/software/">
					<template v-slot:icon>
						<svg width="48" height="48" viewBox="-24,-24 48,48" fill="none" stroke="var(--color--fg)" stroke-width="2px"
							stroke-linecap="round" stroke-linejoin="round">
							<path
								d="M12,-16 a4,4 90 0 1 4,4 v6 a4,4 90 0 1 -4,4 h-24 a4,4 90 0 1 -4,-4 v-6 a4,4 90 0 1 4,-4 z M-10,-12 h2 m4,0 h6 m-12,4 h2 M12,0 a4,4 90 0 1 4,4 v6 a4,4 90 0 1 -4,4 h-24 a4,4 90 0 1 -4,-4 v-6 a4,4 90 0 1 4,-4 z M0,6 h12 m-12,4 h12" />
						</svg>
					</template>
					ソフトウェア情報
				</NavigationButton>
				<NavigationButton href="/restricted-servers/">
					<template v-slot:icon>
						<svg width="48" height="48" fill="none" stroke="var(--color--fg)" stroke-width="2px" stroke-linecap="round"
							stroke-linejoin="round">
							<path d="M24,8 a16,16 180 1 1 0,32 16,16 180 1 1 0,-32 z M24,16 v10" />
							<path d="M24,31 a1,1 180 1 1 0,2 1,1 180 1 1 0,-2" fill="var(--color--fg)" stroke="none" />
						</svg>
					</template>
					制限済みサーバー
				</NavigationButton>
				<NavigationButton href="https://geoplanetary.net/">
					<template v-slot:icon><img src="../../../public/assets/logo/geoplanetary.svg" height="48"></template>
					サービスにもどる
				</NavigationButton>
			</nav>
		</div>
	</transition>
	<div :class="['content-pain', 'main', !navHidden ? 'nav-shown' : undefined]">
		<slot></slot>
	</div>
	<SiteFooter :class="['content-pain', !navHidden ? 'nav-shown' : undefined]" />
</template>

<script setup lang="ts">
import MenuButton from './menu-button.vue';
import { defineModel } from 'vue';
import NavigationButton from './navigation-button.vue';
import SiteFooter from './site-footer.vue';

const navHidden = defineModel<boolean>('navHidden');
function toggleNavHidden() {
	navHidden.value = !navHidden.value;
}

</script>

<style lang="css" scoped>
.nav-disp {
	display: block;
	z-index: 272;
	width: 48px;
	height: 48px;
	margin: 8px;
	position: fixed;
	top: 0;
	left: 0;
}

.site-navigation {
	display: flow-root;
	z-index: 256;
	width: 256px;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	background: hsl(from var(--color--bg) h s calc(l + 2.5));
	overflow: hidden;
}

.nav-root {
	display: flex;
	box-sizing: border-box;
	width: 256px;
	margin-top: 64px;
	padding-inline: 8px;
	flex-flow: column;
	gap: 8px;
}

.content-pain {
	transition: margin 800ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

.content-pain.main {
	min-height: 100vh;
}

@media screen and (min-width: 800px) {
	.content-pain.nav-shown {
		margin-left: 256px;
	}
}

.v-enter-active,
.v-leave-active {
	transition: width 800ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

.v-enter-from,
.v-leave-to {
	width: 0;
}
</style>
