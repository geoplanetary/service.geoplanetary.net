<template>
	<div class="keyvalue-panel">
		<div class="key">
			{{ props.title }}
		</div>
		<div class="value">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
	title?: string;
}>(), {
});
</script>

<style lang="css" scoped>
.keyvalue-panel {
	display: flex;
	flex-flow: column;
}

.keyvalue-panel>.value {
	display: block;
	margin-top: auto;
}
</style>
