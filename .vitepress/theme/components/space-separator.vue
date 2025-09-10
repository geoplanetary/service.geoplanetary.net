<template>
	<div :style="style"></div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
	height?: number;
}>(), {
	height: 0,
})
const style = computed(() => { return { height: `${props.height}rem` } })
</script>
