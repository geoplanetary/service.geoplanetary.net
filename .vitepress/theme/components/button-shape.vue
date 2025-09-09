<template>
	<div :class="['button-shape', props.primary ? 'primary' : undefined]">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
	primary?: boolean;
}>(), {
	primary: false,
})
</script>

<style lang="css">
.button-shape {
	display: block;
	border-radius: 6px;
	padding-block: 6px;
	padding-inline: 8px;
	overflow: hidden;
	background: var(--color--key-bg);
	color: var(--color--fg);
	font-weight: 600;
	text-align: center;
}

.button-shape.primary {
	background: var(--color--accent);
}
</style>
