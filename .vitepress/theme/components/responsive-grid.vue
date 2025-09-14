<template>
	<div class="responsive-grid">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
.responsive-grid {
	display: grid;
	gap: 1.5rem;
}

@media screen and (not (width < 1200px)) {
	.responsive-grid {
		grid-template-columns: 1fr 1fr 1fr;
	}
}

@media screen and (not (width < 800px)) and (width < 1200px) {
	.responsive-grid {
		grid-template-columns: 1fr 1fr;
	}
}

@media screen and (width < 800px) {
	.responsive-grid {
		grid-template-columns: 1fr;
	}
}
</style>
