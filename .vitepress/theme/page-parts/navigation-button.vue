<template>
	<a :class="itemClass" :href="props.href" :target="props.href && loc.isLocal(props.href) ? undefined : '_blank'">
		<div class="icon">
			<slot name="icon"></slot>
		</div>
		<div class="text">
			<slot></slot>
		</div>
	</a>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import { useLocation } from '../composable/location';
import { useRoute } from 'vitepress';

const props = withDefaults(defineProps<{
	href?: string;
}>(), {
})
const loc = useLocation();
const route = useRoute();

const itemClass = computed(() => ['nav-button', props.href && route.path === props.href ? 'current' : undefined])
</script>

<style lang="css" scoped>
.nav-button {
	display: flex;
	border-radius: 8px;
	flex-flow: row;
	align-items: center;
	gap: 4px;
	overflow: hidden;
	color: var(--color-fg);
	background-color: var(--color--button-bg);
	transition: all 400ms cubic-bezier(0.39, 0.575, 0.565, 1);
}

.nav-button:hover,
.nav-button:focus {
	color: var(--color--link);
	background-color: hsl(from var(--color--accent) h s l / 15%);
}

.nav-button.current {
	color: var(--color--link);
	background-color: hsl(from var(--color--accent) h s l / 15%);
}

.nav-button>.icon {
	width: 48px;
	height: 48px;
	margin: 4px;
}

.nav-button>.text {
	flex: 1;
	font-size: 0.8rem;
	font-weight: 600;
}
</style>
