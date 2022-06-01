// 本地环境配置
module.exports = {
  env: 'development',
  mock: true,
  title: '开发',
  baseUrl: 'http://localhost:9018', // 项目地址
  // baseApi: 'https://test.xxx.com/api', // 本地api请求地址,注意：如果你使用了代理，请设置成'/'
  baseApi: 'https://mock.apipost.cn/app/mock/project/4f4554ea-359d-4b82-8572-a135ad12481d',
  APPID: 'wx9790364d20b47d95',
  APPSECRET: 'xxx',
  $cdn: 'https://imgs.solui.cn'
}
