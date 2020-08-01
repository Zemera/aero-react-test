/* export const prefixer = config.api_url; */
export const prefixer =
  'https://my-json-server.typicode.com/aero-frontend/test-task/';

export const article = {
  PRODUCTS_SUCCESS: `${prefixer}PRODUCTS_SUCCESS`,
  FAVORITE_FAIL: (productID: number) =>
    `${prefixer}FAVORITE_FAIL?productID=${productID}`,
  FAVORITE_SUCCESS: (productID: number) =>
    `${prefixer}/FAVORITE_SUCCESS?productID=${productID}`,
  FILTER_SUCCESS: (filter: any) =>
    `${prefixer}FILTER_SUCCESS?filters=[${filter}]`,
  FILTER_FAIL: `${prefixer}FILTER_FAIL`
};
