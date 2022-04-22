import { getPlatform, clientWidth } from './index'
export default function monitor() {
  const data = {
    clientWidth: null,
  }
  let first = true;

  reactive(data)

  // 判断如果是 H5 那就执行以下代码
  if (getPlatform() == 'H5') {
    // 初始化 clientWidth
    data.clientWidth = clientWidth();

    uni.onWindowResize((res) => {
      data.clientWidth = res.size.windowWidth;
    })
  }

  function reactive(obj) {
    Object.keys(obj).forEach(key => {
      let value = obj[key]
      Object.defineProperty(obj, key, {
        get: function () {
          return value
        },
        set: function (newValue) {
          if (first) return first = false;
          value = newValue
          window.location.reload()
        }
      })
    })
    return obj
  }
}