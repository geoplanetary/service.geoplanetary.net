import { computed, onMounted, onUnmounted, ref } from "vue";

export function useMisskeyStatus() {
	const pingDuration = ref<number | undefined>(undefined);
	const onlineUserCount = ref<number | undefined>(undefined);
	const totalUserCount = ref<number | undefined>(undefined);
	const noteCount = ref<number | undefined>(undefined);
	const serverAlive = computed(() => pingDuration !== undefined)

	var pingInterval: number | undefined = undefined;

	async function update() {
		const start = Date.now();
		await fetch('https://geoplanetary.net/api/ping', { method: 'POST', body: '{}', headers: { "Content-Type": "application/json", }, }).then((v) => {
			if (!v.ok) { throw Error(); }
			return v.json();
		}).then((v) => {
			if (typeof v != 'object' || typeof v['pong'] != 'number') { throw Error(); }
			pingDuration.value = Date.now() - start;
		}).catch(() => {
			pingDuration.value = undefined;
		}).finally(() => {
			updateStats();
			updateOnlineUserCount();
		});
	}

	async function updateOnlineUserCount() {
		await fetch('https://geoplanetary.net/api/get-online-users-count', { method: 'POST', body: '{}', headers: { "Content-Type": "application/json", }, }).then((v) => {
			if (!v.ok) { throw Error(); }
			return v.json();
		}).then((v) => {
			if (typeof v != 'object' || typeof v['count'] != 'number') { throw Error(); }
			onlineUserCount.value = v['count'];
		}).catch(() => {
			onlineUserCount.value = undefined;
		});
	}

	async function updateStats() {
		await fetch('https://geoplanetary.net/api/stats', { method: 'POST', body: '{}', headers: { "Content-Type": "application/json", }, }).then((v) => {
			if (!v.ok) { throw Error(); }
			return v.json();
		}).then((v) => {
			if (typeof v != 'object') { throw Error(); }
			totalUserCount.value = typeof v['originalUsersCount'] == 'number' ? v['originalUsersCount'] : undefined;
			noteCount.value = typeof v['originalNotesCount'] == 'number' ? v['originalNotesCount'] : undefined;
		}).catch(() => {
			totalUserCount.value = undefined;
			noteCount.value = undefined;
		});
	}

	onMounted(() => {
		update();
		pingInterval = setInterval(update, 30000);
	});
	onUnmounted(() => {
		clearInterval(pingInterval);
		pingInterval = undefined;
	});

	return {
		pingDuration,
		onlineUserCount,
		totalUserCount,
		noteCount,
		serverAlive,
	};
}

export function useMisskeyMeta() {
	const version = ref<string | undefined>(undefined);
	const repositoryUrl = ref<string | undefined>(undefined);
	const feedbackUrl = ref<string | undefined>(undefined);

	async function updateMeta() {
		await fetch('https://geoplanetary.net/api/meta', { method: 'POST', body: '{"detail":false}', headers: { "Content-Type": "application/json", }, }).then((v) => {
			if (!v.ok) { throw Error(); }
			return v.json();
		}).then((v) => {
			if (typeof v != 'object') { throw Error(); }
			version.value = typeof v['version'] == 'string' ? v['version'] : undefined;
			repositoryUrl.value = typeof v['repositoryUrl'] == 'string' ? v['repositoryUrl'] : undefined;
			feedbackUrl.value = typeof v['repositoryUrl'] == 'string' ? v['repositoryUrl'] : undefined;
		}).catch(() => {
			version.value = undefined;
			repositoryUrl.value = undefined;
			feedbackUrl.value = undefined;
		});
	}

	onMounted(() => {
		updateMeta();
	});

	return {
		version,
		repositoryUrl,
		feedbackUrl,
	};
}

export type AnnouncementData = {
	id: string;
	url: URL;
	createDate: number | undefined;
	mofifyDate: number | undefined;
	title: string | undefined;
	content: string | undefined;
}

export function useMisskeyAnnouncements() {
	const status = ref<'fetching' | 'done' | 'error'>('fetching');
	const announcements = ref<AnnouncementData[] | undefined>(undefined);
	const announcementIter = {
		[Symbol.asyncIterator]() {
			var untilId: string | undefined = undefined;
			const announcementURL = (id: string) => `https://geoplanetary.net/announcements/${id}`
			const extract = (v: unknown): AnnouncementData => {
				if (!v || typeof v !== 'object') { throw Error(); }
				if (!Object.hasOwn(v, 'id') || typeof v['id'] !== 'string') { throw Error(); }
				if (Object.hasOwn(v, 'createdAt') && v['createdAt'] !== null && typeof v['createdAt'] !== 'string') { throw Error(); }
				if (Object.hasOwn(v, 'updatedAt') && v['updatedAt'] !== null && typeof v['updatedAt'] !== 'string') { throw Error(); }
				if (Object.hasOwn(v, 'title') && v['title'] !== null && typeof v['title'] !== 'string') { throw Error(); }
				if (Object.hasOwn(v, 'text') && v['text'] !== null && typeof v['text'] !== 'string') { throw Error(); }
				return {
					id: v['id'],
					url: new URL(announcementURL(v['id'])),
					createDate: v['createdAt'] !== null ? Date.parse(v['createdAt']) : undefined,
					mofifyDate: v['updatedAt'] !== null ? Date.parse(v['updatedAt']) : undefined,
					title: v['title'],
					content: v['text'],
				}
			}
			return {
				async next() {
					return await fetch('https://geoplanetary.net/api/announcements', { method: 'POST', body: JSON.stringify({ untilId }), headers: { "Content-Type": "application/json", }, }).then((v) => {
						if (!v.ok) { throw Error(); }
						return v.json() as unknown;
					}).then((v) => {
						if (!Array.isArray(v)) { throw Error(); }
						return (v as unknown[]).map(i => extract(i));
					}).then((v) => {
						untilId = v.length <= 0 ? undefined : v[v.length - 1].id;
						return { value: v, done: v.length <= 0 }
					})
				}
			}
		}
	}

	async function updateList() {
		status.value = 'fetching';
		try {
			var r: AnnouncementData[] = [];
			// 非同期関数のためスプレッドは使用できない
			for await (const i of announcementIter) {
				r = r.concat(i);
			}
			announcements.value = r;
			status.value = 'done';
		} catch (e) {
			announcements.value = undefined;
			status.value = 'error';
		}
	}

	onMounted(() => {
		updateList();
	})

	return {
		status,
		announcements,
	}
}
