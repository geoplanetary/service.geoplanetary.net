export type ThemeConfig = {
	copyright?: string;
	footer?: {
		message?: string;
		navigation?: {
			name: string;
			href: string;
		}[];
	};
};
