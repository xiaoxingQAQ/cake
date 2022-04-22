import LuckRequest from './index';

export function getGoodsList(data) {
  return LuckRequest.get('/1.1/classes/goods', data, true);
}