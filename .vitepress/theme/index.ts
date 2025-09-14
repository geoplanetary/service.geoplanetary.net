// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'
import ButtonShape from './components/button-shape.vue'
import DateTip from './components/date-tip.vue'
import SpaceSeparator from './components/space-separator.vue'
import ResponsiveGrid from './components/responsive-grid.vue'
import KeyvaluePanel from './components/keyvalue-panel.vue'
import ValueItem from './components/value-item.vue'
import CardPanel from './components/card-panel.vue'

export default {
	Layout,
	enhanceApp({ app, router, siteData }) {
		app.component('buttonShape', ButtonShape);
		app.component('card', CardPanel);
		app.component('dateTip', DateTip);
		app.component('grid', ResponsiveGrid);
		app.component('keyValue', KeyvaluePanel);
		app.component('space', SpaceSeparator);
		app.component('value', ValueItem);
	}
} satisfies Theme
