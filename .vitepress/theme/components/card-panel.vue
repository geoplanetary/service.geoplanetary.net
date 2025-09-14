<template>
	<a v-if="href && localHref" :href="href.href" class="card-panel" :style="{ 'background-color': props.color }">
		<div class="front" :style="backgroundStyle">
			<div class="items" :style="{ 'background-color': `hsl(from ${props.color} h s l / 0.875` }">
				<slot></slot>
			</div>
		</div>
	</a>

	<a v-else-if="href" target="_blank" :href="href.href" class="card-panel" :style="{ 'background-color': props.color }">
		<div class="front" :style="backgroundStyle">
			<div class="items" :style="{ 'background-color': `hsl(from ${props.color} h s l / 0.875` }">
				<slot></slot>
			</div>
		</div>
	</a>

	<div v-else class="card-panel" :style="{ 'background-color': props.color }">
		<div class="front" :style="backgroundStyle">
			<div class="items" :style="{ 'background-color': `hsl(from ${props.color} h s l / 0.875` }">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import { useLocation } from '../composable/location';
const props = withDefaults(defineProps<{
	href?: string | URL;
	color?: string;
	backgroundUrl?: string | URL;
}>(), {
})
const location = useLocation();

const href = computed(() => props.href !== undefined ? location.parseURL(props.href) : undefined);
const localHref = computed(() => props.href ? location.isLocal(props.href) : false);
const backgroundUrl = computed(() => props.backgroundUrl !== undefined ? location.parseURL(props.backgroundUrl) : undefined);
const backgroundStyle = computed(() => { return { background: backgroundUrl.value ? `url(${backgroundUrl.value}) center / cover no-repeat` : undefined } });
</script>

<style lang="css" scoped>
.card-panel {
	box-sizing: border-box;
	border-radius: 8pt;
	margin-block: 8pt;
	overflow: hidden;
	background-color: var(--color--dark-bg);
}

a.card-panel {
	display: block;
	color: unset;
	font-weight: unset;
	background-color: var(--color--button-bg);
}

.card-panel .front {
	height: 100%;
}

.items {
	display: flex;
	flex-flow: column;
	align-items: start;
	box-sizing: border-box;
	padding: 8pt;
	height: 100%;
	backdrop-filter: blur(4px);
}
</style>
