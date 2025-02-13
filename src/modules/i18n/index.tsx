'use client';

import { createContext, FC, ReactNode } from 'react';
/**
 * I18N WORKFLOW:
 * * EACH PAGE, WHEN REQUESTED, SHOULD COLLECT THE accept-language HEADER AND ACT ON IT TO EITHER
 * ** SELECT PT IF IT HAS pt
 * ** FALLBACK TO EN OTHERWISE
 * THEN, RENDER I18NPROVIDER WITH PROPER LANG KEY
 */

const EN_LABELS: I18nLabels = {
  pageTitle: 'Shorten your URL',
  inputLabel: 'URL',
  backendError: 'Could not make it shorter. Please, try again.',
  requiredError: 'Required. Must be a valid http/https URL.',
  inputPlaceholder: 'Type the URL to shorten',
  ctaLabel: 'Shorten it',
  revealTitle: 'Your Short URL:',
};

const PT_LABELS: I18nLabels = {
  pageTitle: 'Encurte sua URL',
  inputLabel: 'URL',
  backendError: 'Não pude encurtar essa URL. Por favor, tente novamente.',
  requiredError: 'Obrigatório. Deve ser uma URL http/https válida.',
  inputPlaceholder: 'Digite a URL que você quer encurtar.',
  ctaLabel: 'Encurte',
  revealTitle: 'Sua URL encurtada:',
};

type I18nLabels = { [key: string]: string };
export type I18nLanguageKey = 'en' | 'pt';
export const I18nContext = createContext<I18nLabels>({});

const I18nProvider: FC<{ lang: I18nLanguageKey; children: ReactNode }> = ({
  children,
  lang,
}) => {
  const labels = lang === 'pt' ? PT_LABELS : EN_LABELS;
  return <I18nContext.Provider value={labels}>{children}</I18nContext.Provider>;
};

export default I18nProvider;
