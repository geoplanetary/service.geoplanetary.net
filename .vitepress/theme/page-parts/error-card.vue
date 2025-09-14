<template>
	<CardPanel color="var(--color--error-bg)" class="error-card">
		<p>
			<svg style="vertical-align: middle;" width="48" height="48" viewBox="-24,-24,48,48" fill="none"
				stroke="var(--color--error-fg)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M0,-16 a16,16 180 0 1 0,32 a16,16 180 0 1 0,-32 M-6,-6 l12,12 m-12,0 l12,-12" />
			</svg>
			<span class="title">
				{{ props.title }}
			</span>
		</p>
		<slot></slot>
	</CardPanel>
</template>

<script setup lang="ts">
import CardPanel from '../components/card-panel.vue';

const props = withDefaults(defineProps<{
	title?: string;
}>(), {});
</script>

<style lang="css" scoped>
.title {
	font-weight: 600;
}
</style>
