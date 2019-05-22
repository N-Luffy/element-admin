import variables from '@/styles/element-variables.scss'

const state = {
  theme: variables.theme,
  showSettings: (localStorage.showSettings === undefined) ? (appConfig.showSettings || false) : localStorage.showSettings === 'true',
  tagsView: (localStorage.tagsView === undefined) ? (appConfig.tagsView || false) : localStorage.tagsView === 'true',
  fixedHeader: (localStorage.fixedHeader === undefined) ? (appConfig.fixedHeader || false) : localStorage.fixedHeader === 'true',
  sidebarLogo: (localStorage.sidebarLogo === undefined) ? (appConfig.sidebarLogo || false) : localStorage.sidebarLogo === 'true'
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
    localStorage.showSettings = state.showSettings
    localStorage.tagsView = state.tagsView
    localStorage.fixedHeader = state.fixedHeader
    localStorage.sidebarLogo = state.sidebarLogo
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
