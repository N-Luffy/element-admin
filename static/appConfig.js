/**
 * vue 打包后保留配置文件
 * 1. 配置文件放到static中不用被打包
 * 2. 在eslintrc.js中添加globals全局变量（还需设置允许使用全局变量，否则eslint会报错）
 * 3. 配置文件直接在index.html中引用
 * 4. 用配置文件中的常量初始化vuex中的全局变量
 */

const appConfig = {
  title: 'Vue Element UI',
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',
}
