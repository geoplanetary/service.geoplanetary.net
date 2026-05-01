<template>
	<footer>
		<div>
			<div class="spacer"></div>
			<div>{{ site.title }}</div>
			<div v-if="site.themeConfig.copyright">{{ site.themeConfig.copyright }}</div>
			<nav v-if="site.themeConfig.footer?.navigation" class="footer-nav">
				<ul>
					<li v-for="i in site.themeConfig.footer.navigation">
						<a :href="i.href" :target="location.isLocal(i.href) ? undefined : '_blank'">{{ i.name }}</a>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { ThemeConfig } from '../config';
import { useLocation } from '../composable/location';

const location = useLocation();
const { site } = useData<ThemeConfig>();
</script>

<style lang="css" scoped>
footer {
	margin-block-start: 8rem;
	background: hsl(from var(--color--bg) h s calc(l - 10));
}

footer>div {
	display: flex;
	flex-flow: column;
	padding: 4rem;
}

.spacer {
	flex: 1;
}

footer nav.footer-nav {
	font-size: 90%;
}

footer nav.footer-nav>ul {
	padding: 0;
}

footer nav.footer-nav>ul>li {
	list-style-type: none;
}
</style>
