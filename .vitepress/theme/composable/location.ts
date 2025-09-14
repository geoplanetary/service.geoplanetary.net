import { computed } from "vue"

export function useLocation() {
	const currentDocument = computed(() => {
		try {
			return document.location;
		} catch (e) {
			return undefined;
		}
	})
	function parseURL(url: string | URL) {
		return URL.parse(url, currentDocument.value?.href);
	}
	function isLocal(url: string | URL) {
		return parseURL(url)?.origin === currentDocument.value?.origin;
	}
	function isURLString(url: string) {
		return URL.canParse(url, 'https://example.com/');
	}
	function isRelative(url: string) {
		return isURLString(url) && !URL.canParse(url);
	}
	return {
		currentDocument,
		parseURL,
		isLocal,
		isURLString,
		isRelative,
	}
}
