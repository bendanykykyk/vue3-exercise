/**
 * 阿里iconfont配置
 **/

// 定义iconfont库
const iconfontVersion = ['3439891_wd1dzqnnz7']
const iconfontUrlCss = `//at.alicdn.com/t/font_$key.css`

// 定义动态插入方法
const loadStyle = (url) => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

// 动态插入
iconfontVersion.forEach((ele) => {
  loadStyle(iconfontUrlCss.replace('$key', ele))
})
