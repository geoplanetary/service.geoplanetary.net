<template>
	<footer>
		<div>
			<div class="spacer"></div>
			<div>{{ site.title }}</div>
			<details>
				<summary>
					Copyright 2025 zawa-ch.
				</summary>
				<p>
					<b>このサイトのソース</b>
				</p>
				<p>
					このサイトのソースコードは、<a>Github</a>で確認できます。
				</p>
				<p>
					<b>オープンソースライセンス</b>
				</p>
				<p>
					このサイトは、次に示すオープンソースライブラリを使用して開発されています。
				</p>
				<ul>
					<li><a href="https://www.npmjs.com/package/mfm-js" target="_blank">mfm-js</a> (<a
							href="https://opensource.org/license/mit" target="_blank">MIT License</a>)</li>
					<li><a href="https://www.npmjs.com/package/vitepress" target="_blank">vitepress</a> (<a
							href="https://opensource.org/license/mit" target="_blank">MIT License</a>)</li>
					<li><a href="https://www.npmjs.com/package/vue" target="_blank">vue</a> (<a
							href="https://opensource.org/license/mit" target="_blank">MIT License</a>)</li>
				</ul>
			</details>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';


const { site } = useData();
</script>

<style lang="css" scoped>
footer {
	margin-block-start: 8rem;
	background: hsl(from var(--color--bg) h s calc(l - 10));
}

footer>div {
	display: flex;
	flex-flow: column;
	padding: 4rem;
}

.spacer {
	flex: 1;
}
</style>
