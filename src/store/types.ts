import {
  ChangeLanguage,
  InternationalisationState,
  SetTranslatorFunction
} from './types/InternationalisationTypes';
import {
  LoadProductsRequest,
  LoadProductsSuccess,
  LoadProductsError,
  ProductsState,
  addFavSuccess
} from './types/ProductTypes';

export * from './types/InternationalisationTypes';

export * from './types/ProductTypes';

export interface ApplicationState {
  i18n: InternationalisationState;
  products: ProductsState;
}

export type ApplicationAction =
  | ChangeLanguage
  | SetTranslatorFunction
  | LoadProductsRequest
  | LoadProductsSuccess
  | addFavSuccess
  | LoadProductsError;
