<template>
	<ButtonBase class="menu-button" @activate="onActivate" tabindex="0">
		<svg width="48" height="48">
			<path d="M10,14h28M10,24h28M10,34h28" stroke="var(--color--fg)" stroke-width="4" stroke-linecap="round" />
		</svg>
	</ButtonBase>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import ButtonBase, { type AppendKeys } from '../primitives/button-base.vue';

const emit = defineEmits<{
	activate: [AppendKeys];
}>();

function onActivate(appends: AppendKeys) { emit('activate', appends); }
</script>

<style lang="css" scoped>
.menu-button {
	backdrop-filter: blur(4px);
}
</style>
