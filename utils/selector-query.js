export default function (selector) {
  return new Promise((resolve) => {
    const query = uni.createSelectorQuery()
    query.select(selector).boundingClientRect(resolve).exec()
  })
}