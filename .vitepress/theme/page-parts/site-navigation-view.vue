<template>
	<MenuButton class="nav-disp" @activate="toggleNavHidden"></MenuButton>
	<transition>
		<div v-if="!navHidden" class="site-navigation">
			<nav class="nav-root">
				<a style="display:flex;" target="_blank" href="https://geoplanetary.net/">
					<div style="margin:auto;"><img src="../../../icons/svg/geoplanetary-icon.svg" height="48"></img></div>
				</a>
				<a href="/">
					<ButtonShape>ホーム</ButtonShape>
				</a>
				<a href="">
					<ButtonShape>お知らせ</ButtonShape>
				</a>
				<a href="/server-rules">
					<ButtonShape>規約とポリシー</ButtonShape>
				</a>
				<a href="">
					<ButtonShape>カスタム絵文字</ButtonShape>
				</a>
				<a href="">
					<ButtonShape>ソフトウェア情報</ButtonShape>
				</a>
				<a href="">
					<ButtonShape>制限済みサーバー</ButtonShape>
				</a>
			</nav>
		</div>
	</transition>
	<div :class="['content-pain', !navHidden ? 'nav-shown' : undefined]">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import ButtonShape from '../components/button-shape.vue';
import MenuButton from './menu-button.vue';
import { defineModel } from 'vue';

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
