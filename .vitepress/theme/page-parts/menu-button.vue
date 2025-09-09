<template>
	<ButtonBase class="menu-button" @activate="onActivate" tabindex="0">
		<svg width="48" height="48">
			<path d="M8,12h32v4h-32zM8,22h32v4h-32zM8,32h32v4h-32z" fill="var(--color--fg)" />
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
