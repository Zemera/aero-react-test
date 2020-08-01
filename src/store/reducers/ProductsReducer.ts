import produce from 'immer';
import { ApplicationAction } from 'store/types';
import {
  LOAD_PRODUCTS_REQUEST,
  ProductsState,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  ADD_FAV_SUCCESS
} from 'store/types/ProductTypes';

export const initialState: ProductsState = {
  loading: {
    product_failed: false,
    product_loading: false
  },
  products: []
};

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST:
      return produce(state, (draft) => {
        draft.loading.product_failed = false;
        draft.loading.product_loading = true;
      });

    case LOAD_PRODUCTS_SUCCESS:
      return produce(state, (draft) => {
        draft.loading.product_failed = false;
        draft.loading.product_loading = false;
        draft.products = action.products;
      });
    case LOAD_PRODUCTS_ERROR:
      return produce(state, (draft) => {
        draft.loading.product_failed = false;
        draft.loading.product_loading = false;
      });

    case ADD_FAV_SUCCESS:
      return produce(state, (draft) => {
        draft.products = draft.products.map((item) =>
          item.id === action.id ? { ...item, inFav: action.fav } : item
        );
      });
    default:
      return state;
  }
};

export default reducer;
