import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import uk from './uk.json';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: en,
			},
			uk: {
				translation: uk,
			},
		},
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
