import { Action } from 'redux';

export const LOAD_PRODUCTS_REQUEST = 'LOAD_PRODUCTS_REQUEST';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_ERROR = 'LOAD_PRODUCTS_ERROR';
export const ADD_FAV_SUCCESS = 'ADD_FAV_SUCCESS';

export interface Products {
  id: number;
  link: string;
  code: number;
  imgUrl: string;
  availability: boolean;
  title: string;
  params: Params[];
  inFav: boolean;
  inComparsion: boolean;
}

export interface Params {
  name: string;
  value: string;
}

export interface LoadingProductsState {
  product_loading: boolean;
  product_failed: boolean;
}

export interface ProductsState {
  loading: LoadingProductsState;
  products: Products[];
}

export interface LoadProductsRequest extends Action {
  type: typeof LOAD_PRODUCTS_REQUEST;
}

export interface LoadProductsSuccess extends Action {
  type: typeof LOAD_PRODUCTS_SUCCESS;
  products: Products[];
}

export interface addFavSuccess extends Action {
  type: typeof ADD_FAV_SUCCESS;
  fav: boolean;
  id: number;
}

export interface LoadProductsError extends Action {
  type: typeof LOAD_PRODUCTS_ERROR;
}
