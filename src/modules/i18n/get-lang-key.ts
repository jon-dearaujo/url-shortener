'use server';

import { headers } from 'next/headers';
import { I18nLanguageKey } from '.';

export const getI18nLangKey = async (): Promise<I18nLanguageKey> => {
  const acceptLanguages = (await headers()).get('accept-language');
  if (!acceptLanguages) return 'en';

  const enPosition = acceptLanguages.toLowerCase().indexOf('en');
  const ptPosition = acceptLanguages.toLowerCase().indexOf('pt');

  if (enPosition >= 0 && ptPosition >= 0) {
    if (enPosition < ptPosition) return 'en';
    return 'pt';
  }

  return ptPosition > 0 ? 'pt' : 'en';
};
