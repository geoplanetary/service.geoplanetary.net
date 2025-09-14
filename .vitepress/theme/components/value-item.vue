<template>
	<div class="keyvalue-number">
		<span :style="numberStyle">{{ props.diff && typeof props.value === 'number' && props.value > 0 ? '+' : '' }}{{
			props.value !== undefined ? props.value : '---' }}</span>
		<span :style="unitStyle">{{ props.unit }}</span>
	</div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue';

const props = withDefaults(defineProps<{
	value?: number | string;
	diff?: boolean;
	unit?: string;
	size?: number;
	unitSize?: number;
}>(), {
	unit: '',
	diff: false,
	size: 2,
	unitSize: 1.2,
})

const numberStyle = computed(() => { return { 'font-size': `${props.size}rem` }; })
const unitStyle = computed(() => { return { 'margin-inline-start': `${props.unitSize * 0.5}rem`, 'font-size': `${props.unitSize}rem` }; })
</script>

<style lang="css" scoped>
.keyvalue-number {
	text-align: end;
	font-family: var(--font-family--monospace);
}
</style>
