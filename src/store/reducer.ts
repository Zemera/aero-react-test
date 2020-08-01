import { combineReducers, Reducer } from 'redux';
import InternationalisationReducer from './reducers/InternationalisationReducer';

import productsReducer from './reducers/ProductsReducer';
import { ApplicationState } from './types';

const rootReducer: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  i18n: InternationalisationReducer,

  products: productsReducer
});

export default rootReducer;
