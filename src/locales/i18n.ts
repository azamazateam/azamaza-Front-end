import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {en} from './en.ts';
import {uk} from './uk.ts';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: en,
			uk: uk,
		},
		debug: false,
		fallbackLng: 'en',
		detection: {
			order: ['localStorage', 'cookie', 'navigator'],
			caches: ['localStorage', 'cookie'],
		},
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: true,
		},
	});

export default i18n;
