import { useData } from "vitepress";
import { computed } from "vue";

export type RelativePageEntry = {
	href: string;
	title: string;
};

const hasEntry = <T extends object, K extends string>(o: T, key: K): o is (T & { [k in K]: unknown }) => { return Object.hasOwn(o, key); };

function isRelativePageEntry(o: unknown): o is RelativePageEntry {
	if (typeof o !== 'object' || o === null) { return false; }
	return hasEntry(o, 'href') && typeof o.href === 'string' && hasEntry(o, 'title') && typeof o.title === 'string';
}

export function useRelativePages() {
	const { frontmatter } = useData();
	const pageEntries = computed(() => {
		if (frontmatter.value === null || typeof frontmatter.value !== 'object' || !hasEntry(frontmatter.value, 'related') || !Array.isArray(frontmatter.value.related)) { return []; }
		return frontmatter.value.related.filter(isRelativePageEntry);
	});
	return { entries: pageEntries };
}

