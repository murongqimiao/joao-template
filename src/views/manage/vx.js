import http from '../../api/http'

const manage = {
  state: {
    manage_tableDate: [],
    total: 0,
    pageSize: 20,
    pageNum: 1,
    searchContent: {},
    loading: false
  },
  mutations: {
    manage_GET_TABLE_DATE: (state, data) => {
      state.manage_tableDate = data.tableDate
      state.total = data.total
      state.pageSize = data.currentPageSize
      state.page = data.currentPage
      state.loading = false
      console.log(state)
    },
    manage_SET_PAGE_NUM: (state, pageNum) => {
      state.pageNum = pageNum
    },
    manage_SET_PAGE_SIZE: (state, pageSize) => {
      state.pageSize = pageSize
    },
    manage_SET_SEARCH_CONTENT: (state, searchContent) => {
      state.searchContent = searchContent
    },
    manage_LOADING: (state, flag) => {
      const loading = flag || !state.loading
      state.loading = loading
    }
  },
  actions: {
    manage_getTableDate ({ commit, state }) {
      // 假装有数据
      const data = { tableDate: [{ numbers: 1, Name: '张三', id: '372', time: '2020年12月10日10:08:10' }, { numbers: 2, Name: '李四', id: '7346', time: "2020年12月11日10:08:23" }], total: 2, currentPageSize: 1, currentPage: 1 }
      commit('manage_LOADING', true)
      setTimeout(() => {
        commit('manage_GET_TABLE_DATE', data)
      }, 1500)
      // 只执行搜索,用vuex内部的pageNum pageSize, searchContent
      // http.get('/example', {
      //   ...state.searchContent,
      //   page: state.pageNum,
      //   pageSize: state.pageSize
      // })
      //   .then(data => {
      //     console.log(data)
      //     commit('manage_GET_TABLE_DATE', data)
      //   })
    },
    manage_setPageNum ({ commit, dispatch }, pageNum) {
      // 改变页数
      commit('manage_SET_PAGE_NUM', pageNum)
      dispatch('manage_getTableDate')
    },
    manage_setPageSize ({ commit, dispatch }, pageSize) {
      // 改变页含
      commit('manage_SET_PAGE_SIZE', pageSize)
      dispatch('manage_getTableDate')
    },
    manage_setSearchContent ({ dispatch, commit }, searchContent) {
      // 改变搜索项
      commit('manage_SET_SEARCH_CONTENT', searchContent)
      dispatch('manage_getTableDate')
    }
  }
}

export default manage
