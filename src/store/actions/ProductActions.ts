import {
  LoadProductsRequest,
  LOAD_PRODUCTS_REQUEST,
  Products,
  LoadProductsSuccess,
  LOAD_PRODUCTS_SUCCESS,
  LoadProductsError,
  LOAD_PRODUCTS_ERROR,
  addFavSuccess,
  ADD_FAV_SUCCESS
} from 'store/types/ProductTypes';

export const loadProductsRequest = (): LoadProductsRequest => ({
  type: LOAD_PRODUCTS_REQUEST
});

export const loadProductsSuccess = (data: Products[]): LoadProductsSuccess => ({
  type: LOAD_PRODUCTS_SUCCESS,
  products: data
});

export const loadProductsError = (): LoadProductsError => ({
  type: LOAD_PRODUCTS_ERROR
});

export const AddFavSuccess = (idItem: number, fav: boolean): addFavSuccess => ({
  type: ADD_FAV_SUCCESS,
  fav: fav,
  id: idItem
});
