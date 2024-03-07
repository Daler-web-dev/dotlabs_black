export const i18n = {
	defaultLocale: "ru",
	locales: ["ru", "uz", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
