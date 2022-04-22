import LuckRequest from './index';

export function getClassify() {
  return LuckRequest.get('/1.1/classes/classify', {}, true);
}

export function getBannerList() {
  return LuckRequest.get('/1.1/classes/banner', {}, true);
}