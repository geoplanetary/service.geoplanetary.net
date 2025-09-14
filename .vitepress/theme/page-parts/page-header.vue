<template>
	<header>
		<h1>{{ frontmatter.title }}</h1>
		<div v-if="pageDate !== undefined">日付:
			<DateTip :date="pageDate" fuzzyness="minute" />
		</div>
		<div v-if="applicableDate !== undefined">発効:
			<DateTip :date="applicableDate" fuzzyness="minute" />
		</div>
		<div v-if="typeof frontmatter.historyPath == 'string'"><a :href="frontmatter.historyPath">更新履歴</a></div>
		<div v-if="willApplicateArticle" class="custom-block info">
			<p class="custom-block-title">現在表示しているのは今後新しく発効する予定の版です。</p>
			<p>
				この文書は <DateTip :date="applicableDate" fuzzyness="minute" /> に発効する版です。
			</p>
			<p v-if="typeof frontmatter.historyPath === 'string'">
				現在有効な版は、<a :href="frontmatter.historyPath">更新履歴</a>から確認できます。
			</p>
		</div>
		<div v-if="willObsoleteArticle" class="custom-block warning">
			<p class="custom-block-title">現在表示しているのは過去の版です。</p>
			<p>
				この文書は <DateTip :date="obsoleteDate" fuzzyness="minute" /> に失効する版です。
			</p>
			<p v-if="typeof frontmatter.obsolete.applicablePath === 'string'">
				<a :href="frontmatter.obsolete.applicablePath">今後有効になる版はこちら</a>から確認できます。
			</p>
		</div>
		<div v-if="isObsoletedArticle" class="custom-block danger">
			<p class="custom-block-title">現在表示しているのは過去の版です。</p>
			<p>
				この文書は <DateTip :date="obsoleteDate" fuzzyness="minute" /> に失効した過去の版です。
				参考のために残されており、これがなんらかの効力を発することはないことに注意してください。
			</p>
			<p v-if="typeof frontmatter.obsolete.applicablePath === 'string'">
				<a :href="frontmatter.obsolete.applicablePath">現在有効な版はこちら</a>を確認してください。
			</p>
		</div>
	</header>
</template>

<script setup lang="ts">
import DateTip from '../components/date-tip.vue';
import { useData } from 'vitepress';
import { computed } from 'vue';

const { frontmatter } = useData();
const pageDate = computed(() => parseDate(frontmatter.value.date))
const applicableDate = computed(() => parseDate(frontmatter.value.applicableDate))
const obsoleteDate = computed(()=>{
	if (typeof frontmatter.value.obsolete !== 'object') { return undefined; }
	return parseDate(frontmatter.value.obsolete.date);
})
const willApplicateArticle = computed(()=> {
	if (applicableDate.value === undefined) { return false; }
	return applicableDate.value > Date.now();
})
const willObsoleteArticle = computed(()=> {
	if (obsoleteDate.value === undefined) { return false; }
	return obsoleteDate.value > Date.now();
})
const isObsoletedArticle = computed(() => {
	if (obsoleteDate.value === undefined) { return false; }
	return obsoleteDate.value <= Date.now();
})

function parseDate(d: unknown) {
	if (typeof d === 'number') {
		return d;
	} else if (typeof d === 'string') {
		const t = Date.parse(d);
		return Number.isNaN(t) ? undefined : t;
	} else {
		return undefined;
	}
}
</script>
