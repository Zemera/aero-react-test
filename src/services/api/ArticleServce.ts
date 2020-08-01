import BaseService from './BaseService';
import { article } from './urls';

class ArticleService {
  static get_list_product = () =>
    BaseService.getRequest(article.PRODUCTS_SUCCESS, false);

  static get_fav_fail = (id: number) =>
    BaseService.getRequest(article.FAVORITE_FAIL(id), false);

  static get_fav_success = (id: number) =>
    BaseService.getRequest(article.FAVORITE_SUCCESS(id), false);

  static get_filter_success = (data: any) =>
    BaseService.getRequest(article.FILTER_SUCCESS(data), false);
}

export default ArticleService;
