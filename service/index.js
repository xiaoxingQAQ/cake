const BASE_URL = "https://vwofxrcx.lc-cn-n1-shared.com";

const BASE_URL_TEST = "https://h5.mcake.com";

class request {
  constructor(baseURL, authHeader = {}) {
    this.baseURL = baseURL;
    this.authHeader = authHeader;
  }
  LuckRequest(url, method, params, isAuth = false, header = {}) {
    const finalHeader = isAuth ? { ...this.authHeader, ...header } : header;
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        method: method,
        data: params,
        header: finalHeader,
        success: (res) => {
          resolve(res.data);
        },
        fail: reject
      })
    })
  }

  get(url, params, isAuth = false, header) {
    return this.LuckRequest(url, "GET", params, isAuth, header);
  }

  post(url, data, isAuth = false, header) {
    return this.LuckRequest(url, "POST", data, isAuth, header);
  }
}

const LuckRequest = new request(BASE_URL, {
  'X-LC-Id': 'VwofxrCxMhvHRwpRy89vPoUb-gzGzoHsz',
  'X-LC-Key': 's6jGXC12UPUOvwkaYANNCDtY',
  'Content-Type': 'application/json'
});

const LuckRequestTest = new request(BASE_URL_TEST, {
  'version': 'v1.0',
  'access-token': '111e07fb2fc536db48c41aa8c010936f'
})


export default LuckRequest;

export {
  LuckRequestTest
}