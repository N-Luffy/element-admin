import requestBase from '../utils/request'

/**
 * config参数：
 * url  请求的服务器URL
 * method 请求时使用的请求方法,默认get(get,post,put,delete,head,patch)
 * baseURL  将被添加到`url`前面，除非`url`是绝对的,可以方便地为 axios 的实例设置`baseURL`，以便将相对 URL 传递给该实例的方法。
 * transformRequest 这只适用于请求方法'PUT'，'POST'和'PATCH', 数组中的最后一个函数必须返回一个字符串，一个 ArrayBuffer或一个 Stream，例如 transformRequest: [function (data) {// 做任何你想要的数据转换   return data;  }]
 * headers  是要发送的自定义 headers  例如 {'X-Requested-With': 'XMLHttpRequest'}
 * params 与请求一起发送的URL参数，必须是纯对象或URLSearchParams对象  例如 { ID: 12345 }
 * paramsSerializer 一个可选的函数，负责序列化`params` 例如 paramsSerializer: function(params) { return Qs.stringify(params, {arrayFormat: 'brackets'}) }
 * data 作为请求主体发送的数据，仅适用于请求方法“PUT”，“POST”和“PATCH”  例如 data: { firstName: 'Fred' }
 * timeout  指定请求超时之前的毫秒数。如果请求的时间超过'timeout'，请求将被中止
 * withCredentials  指示是否跨站点访问控制请求 默认false
 * adapter  允许自定义处理请求，这使得测试更容易。例如 adapter: function (config) { ... }
 * auth '表示应该使用 HTTP 基本认证，并提供凭据，这将设置一个`Authorization'头，覆盖任何现有的`Authorization'自定义头，使用`headers`设置。例如 auth: { username: 'janedoe',password: 's00pers3cret' }
 * responseType 表示服务器将响应的数据类型（'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'）  默认json
 * xsrfCookieName 是要用作 xsrf 令牌的值的cookie的名称， 默认XSRF-TOKEN， 例如 xsrfCookieName: 'XSRF-TOKEN'
 * xsrfHeaderName 是携带xsrf令牌值的http头的名称， 默认X-XSRF-TOKEN， 例如 xsrfHeaderName: 'X-XSRF-TOKEN'
 * onUploadProgress 允许处理上传的进度事件， 例如 onUploadProgress: function (progressEvent) {// 使用本地 progress 事件做任何你想要做的 },
 * onDownloadProgress 允许处理下载的进度事件，例如 onDownloadProgress: function (progressEvent) {// 对本地进度事件执行任何操作 }
 * maxContentLength 定义允许的http响应内容的最大大小 例如 maxContentLength: 2000
 * validateStatus 定义是否解析或拒绝给定的promise，HTTP响应状态码。如果`validateStatus`返回`true`（或被设置为`null` promise将被解析;否则，promise将被拒绝，例如 validateStatus: function (status) {return status >= 200 && status < 300; // 默认值 }
 * maxRedirects 定义在node.js中要遵循的重定向的最大数量，如果设置为0，则不会遵循重定向。默认5，例如maxRedirects: 5
 * httpAgent  `httpAgent`和`httpsAgent`用于定义在node.js中分别执行http和https请求时使用的自定义代理，允许配置类似`keepAlive`的选项，默认情况下不启用。例如 httpAgent: new http.Agent({ keepAlive: true })
 * httpsAgent 例如 httpsAgent: new https.Agent({ keepAlive: true })
 * proxy //定义代理服务器的主机名和端口
 *       //`auth`表示HTTP Basic auth应该用于连接到代理，并提供credentials。
 *       // 这将设置一个`Proxy-Authorization` header，覆盖任何使用`headers`设置的现有的`Proxy-Authorization` 自定义 headers。
 *  例如 proxy: {
         host: '127.0.0.1',
         port: 9000,
         auth: : {
           username: 'mikeymike',
           password: 'rapunz3l'
         }
        }
 *cancelToken 指定可用于取消请求的取消令牌。例如  cancelToken: new CancelToken(function (cancel) {  })
 */
export function send(config) {
  return new Promise((resolve, reject) => {
    try {
      requestBase(config).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
        // console.error(error)
      })
    } catch (error) {
      reject(error)
      // console.log(error)
    }
  })
}

/**
 * config参数 同上
 */
export function request(config) {
  return requestBase(config)
}
