import {
  ChangeLanguage,
  CHANGE_LANGUAGE,
  SetTranslatorFunction,
  SET_TRANSLATOR_FUNCTION,
  InternationalisationTypes
} from 'store/types';
import { TFunction } from 'i18next';

export const changeLanguage = (
  language: InternationalisationTypes
): ChangeLanguage => ({
  type: CHANGE_LANGUAGE,
  language
});

export const setTranslationFunction = (
  t: TFunction
): SetTranslatorFunction => ({
  type: SET_TRANSLATOR_FUNCTION,
  t
});
