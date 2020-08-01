import { Action } from 'redux';
import { TFunction } from 'i18next';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const SET_TRANSLATOR_FUNCTION = 'SET_TRANSLATOR_FUNCTION';

export enum InternationalisationTypes {
  EN = 'en',
  FR = 'fr'
}

export interface InternationalisationState {
  locale: string;
  t?: TFunction;
}

export interface ChangeLanguage extends Action {
  type: typeof CHANGE_LANGUAGE;
  language: InternationalisationTypes;
}

export interface SetTranslatorFunction extends Action {
  type: typeof SET_TRANSLATOR_FUNCTION;
  t: TFunction;
}
