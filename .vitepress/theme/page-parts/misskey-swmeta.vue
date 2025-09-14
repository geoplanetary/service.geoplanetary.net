<template>
	<CardPanel :href="miMeta.repositoryUrl.value">
		<div class="title">
			<img src="https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/assets/about-icon.png?raw=true" />
			Misskey {{ miMeta.version }}
		</div>
	</CardPanel>
</template>

<script setup lang="ts">
import CardPanel from '../components/card-panel.vue'
import { useMisskeyMeta } from '../composable/misskey';

const miMeta = useMisskeyMeta();
</script>

<style lang="css" scoped>
img {
	height: 2em;
	vertical-align: bottom;
	border-radius: 8px;
	overflow: hidden;
}

.title {
	font-size: 1.2rem;
	font-weight: 600;
}

.properties {
	font-size: 0.8rem;
}
</style>
