// import { hyLoginLuckRequest } from './index';

export function getLoginCode() {
  return new Promise((resolve, reject) => {
    wx.login({
      timeout: 10000,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => { 
        reject(err);
      }
    });
  })
}

export function checkSession() {
  return new Promise(resolve => {
    wx.checkSession({
      success: () => {
        resolve(true);
      },
      fail: () => {
        resolve(false);
      }
    });
  })
}

export function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    });
  })
}