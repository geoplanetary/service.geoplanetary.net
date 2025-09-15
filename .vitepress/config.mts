import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcExclude: [
		'**/README.md',
		'templates/*.md',
	],
	lang: 'ja-JP',
	title: "service.geoplanetary.net",
	description: "Misskey サーバー「じおぷらねたりー」サービス情報",
	head: [
		['meta', { name: 'theme-color', content: 'rgb(40, 49, 61)' }]
	],
})
