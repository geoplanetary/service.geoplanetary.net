<template>
	<div class="button" @click="onClick" @keydown="onKeyDown" tabindex="0">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

export type AppendKeys = {
	ctrlKey: boolean;
	shiftKey: boolean;
	altKey: boolean;
	metaKey: boolean;
};

const emit = defineEmits<{
	activate: [appends: AppendKeys];
}>();

function onClick(e: PointerEvent) {
	if (e.defaultPrevented) { return; }
	emit('activate', { ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey, });
}

function onKeyDown(e: KeyboardEvent) {
	if (e.defaultPrevented) { return; }
	if (e.key === 'Enter') {
		emit('activate', { ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey, });
		return;
	}
}
</script>

<style lang="css" scoped>
.button {
	cursor: pointer;
}
</style>
