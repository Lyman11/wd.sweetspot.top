import 'server-only'

// Define the Locale type based on our supported languages
export type Locale = 'en' | 'zh' | 'ja';

// We enumerate the dictionaries so we can load them
const dictionaries = {
    en: () => import('../dictionaries/en.json').then((module) => module.default),
    zh: () => import('../dictionaries/zh.json').then((module) => module.default),
    ja: () => import('../dictionaries/ja.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
