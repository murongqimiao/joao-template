import http from '../../api/http'

const table = {
  state: {
    table_tableDate: [{ numbers: '14:00', Name: '库存量xxx', id: '出', time: '无隐患' }, { numbers: '15:00', Name: '库存量YYY', id: '出', time: '' }],
    total: 0,
    pageSize: 20,
    pageNum: 1,
    searchContent: {},
    loading: false
  },
  mutations: {
    table_GET_TABLE_DATE: (state, data) => {
      state.table_tableDate = data.tableDate
      state.total = data.total
      state.pageSize = data.currentPageSize
      state.page = data.currentPage
      state.loading = false
      console.log(state)
    },
    table_SET_PAGE_NUM: (state, pageNum) => {
      state.pageNum = pageNum
    },
    table_SET_PAGE_SIZE: (state, pageSize) => {
      state.pageSize = pageSize
    },
    table_SET_SEARCH_CONTENT: (state, searchContent) => {
      state.searchContent = searchContent
    },
    table_LOADING: (state, flag) => {
      const loading = flag || !state.loading
      state.loading = loading
    }
  },
  actions: {
    table_getTableDate ({ commit, state }) {
      // 假装有数据
      const data = { tableDate: [{ numbers: 1, Name: '小明', id: '1', time: '1995-01-01' }, { numbers: 2, Name: '小红', id: '2', time: '1885-10-01' }], total: 2, currentPageSize: 1, currentPage: 1 }
      commit('table_LOADING', true)
      setTimeout(() => {
        commit('table_GET_TABLE_DATE', data)
      }, 1500)
      // 只执行搜索,用vuex内部的pageNum pageSize, searchContent
      // http.get('/example', {
      //   ...state.searchContent,
      //   page: state.pageNum,
      //   pageSize: state.pageSize
      // })
      //   .then(data => {
      //     console.log(data)
      //     commit('table_GET_TABLE_DATE', data)
      //   })
    },
    table_setPageNum ({ commit, dispatch }, pageNum) {
      // 改变页数
      commit('table_SET_PAGE_NUM', pageNum)
      dispatch('table_getTableDate')
    },
    table_setPageSize ({ commit, dispatch }, pageSize) {
      // 改变页含
      commit('table_SET_PAGE_SIZE', pageSize)
      dispatch('table_getTableDate')
    },
    table_setSearchContent ({ dispatch, commit }, searchContent) {
      // 改变搜索项
      commit('table_SET_SEARCH_CONTENT', searchContent)
      dispatch('table_getTableDate')
    }
  }
}

export default table
