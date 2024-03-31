import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import AUTH from '../locale/fr/auth.json';
import COMMON from '../locale/fr/common.json';
import ERRORS from '../locale/fr/error.json';
import FAQ from '../locale/fr/faq.json';
import LANDING from '../locale/fr/landing.json';
import MENTIONS from '../locale/fr/mentions.json';
import NEWS from '../locale/fr/news.json';
import SEO from '../locale/fr/seo.json';

import AUTH_EN from '../locale/en/auth.json';
import COMMON_EN from '../locale/en/common.json';
import ERRORS_EN from '../locale/en/error.json';
import FAQ_EN from '../locale/en/faq.json';
import LANDING_EN from '../locale/en/landing.json';
import MENTIONS_EN from '../locale/en/mentions.json';
import NEWS_EN from '../locale/en/news.json';
import SEO_EN from '../locale/en/seo.json';

const resources = {
  fr: {
    all: COMMON,
    ERRORS,
    AUTH,
    COMMON,
    NEWS,
    SEO,
    FAQ,
    LANDING,
    MENTIONS,
  },
  en: {
    all: COMMON_EN,
    ERRORS: ERRORS_EN,
    AUTH: AUTH_EN,
    COMMON: COMMON_EN,
    NEWS: NEWS_EN,
    SEO: SEO_EN,
    FAQ: FAQ_EN,
    LANDING: LANDING_EN,
    MENTIONS: MENTIONS_EN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['fr', 'en'],
    defaultNS: 'all',
    fallbackLng: 'fr',
    defaultLocale: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
