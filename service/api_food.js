import { LuckRequestTest } from './index';
import LuckRequest from './index';

export function getList(data) {
  return LuckRequestTest.get('/api/0434b49d1ac28f9d', data, true);
}

export function pushList(data) {
  return LuckRequest.post('/1.1/batch', data, true);
}