import { ThunkAction } from 'redux-thunk';
import {
  loadProductsRequest,
  loadProductsSuccess,
  loadProductsError,
  AddFavSuccess
} from 'store/actions';
import { ArticleService } from 'services/api';
import {
  ProductsState,
  ApplicationAction,
  ApplicationState
} from 'store/types';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;
//! write documentation here for this line

export const loadProductEffects = (): Effect => async (dispatch, getState) => {
  dispatch(loadProductsRequest());

  return ArticleService.get_list_product()
    .then(async (response: any) => {
      if (response.status === 200) {
        const { data } = await response.json();

        dispatch(loadProductsSuccess(data.products));
      } else {
        dispatch(loadProductsError());
      }
    })
    .catch(() => dispatch(loadProductsError()));
};

export const filterEffects = (data: any): Effect => async (
  dispatch,
  getState
) => {
  dispatch(loadProductsRequest());

  return ArticleService.get_filter_success(data)
    .then(async (response: any) => {
      if (response.status === 200) {
        const { data } = await response.json();
        dispatch(loadProductsSuccess(data.products));
      } else {
        dispatch(loadProductsError());
      }
    })
    .catch(() => dispatch(loadProductsError()));
};

export const addFavEffect = (id: number): Effect => async (
  dispatch,
  getState
) => {
  dispatch(loadProductsRequest());

  return ArticleService.get_fav_success(id)
    .then(async (response: any) => {
      if (response.status === 200) {
        const { data } = await response.json();
        dispatch(AddFavSuccess(id, data.inFav));
      } else {
        dispatch(loadProductsError());
      }
    })
    .catch(() => dispatch(loadProductsError()));
};

export const removeFavEffect = (id: number): Effect => async (
  dispatch,
  getState
) => {
  dispatch(loadProductsRequest());

  return ArticleService.get_fav_fail(id)
    .then(async (response: any) => {
      if (response.status === 200) {
        const { data } = await response.json();
        dispatch(AddFavSuccess(id, false));
        console.log(data.message);
      } else {
        dispatch(loadProductsError());
      }
    })
    .catch(() => dispatch(loadProductsError()));
};
