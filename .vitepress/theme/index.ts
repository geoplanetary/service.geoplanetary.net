// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'
import ButtonShape from './components/button-shape.vue'
import DateTip from './components/date-tip.vue'
import SpaceSeparator from './components/space-separator.vue'

export default {
	Layout,
	enhanceApp({ app, router, siteData }) {
		app.component('buttonShape', ButtonShape);
		app.component('dateTip', DateTip);
		app.component('space', SpaceSeparator);
	}
} satisfies Theme

