import { defineConfig } from 'vitepress'
import { ThemeConfig } from './theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig<ThemeConfig>({
	srcExclude: [
		'**/README.md',
		'templates/*.md',
		'robots.txt',
	],
	lang: 'ja-JP',
	title: "service.geoplanetary.net",
	description: "Misskey サーバー「じおぷらねたりー」サービス情報",
	head: [
		['meta', { name: 'theme-color', content: 'rgb(40, 49, 61)' }]
	],
	themeConfig: {
		copyright: 'Copyright 2025 zawa-ch.',
		footer: {
			message: undefined,
			navigation: [
				{ name: 'このサイトについて', href: '/about/' },
				{ name: 'このサイトのソース', href: 'https://github.com/geoplanetary/service.geoplanetary.net' },
			]
		},
	},
})
