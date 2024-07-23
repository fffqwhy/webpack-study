import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./src/public/locales/en/translation.json";
import es from "./src/public/locales/es/translation.json";

export const resources = {
	"en": {
		translation: en
	},
	"es": {
		translation: es
	}
}
// 初始化 i18next
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // 默认语言
    debug: true, // 在控制台输出调试信息
    // backend: {
    //   loadPath: '/public/locales/{{lng}}/{{ns}}.json' // 语言文件路径  //! 存在解析不到的问题
    // },
    interpolation: {
      escapeValue: false // React 会自动转义
    }
  });

export default i18n;
