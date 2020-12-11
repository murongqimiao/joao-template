<template>
  <div class="manage">
    <table-control
      :control-data="controlData"
      :session-data="sessionData"
      @searchData="searchData"/>
    <table-list
      :table-header-data="tableHeaderData"
      :data-list="manage_data.manage_tableDate"
      :button-content="buttonContent"
      :loading="manage_data.loading"
      @downDetails="downDetails"
    />
    <div class="paginationContain">
      <transition name="el-zoom-in-center">
        <el-pagination
          v-show="showPagination"
          :current-page.sync="manage_data.pageNum"
          :page-size="manage_data.pageSize"
          :page-sizes="[10, 20, 50, 100, 200, 400]"
          :total="manage_data.total"
          class="pagination"
          layout="sizes, prev, pager, next, jumper, total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import TableControl from '../../components/TableControl'
import TableList from '../../components/TableList'
import { searchData, tableData } from './data'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    TableControl,
    TableList
  },
  props: {},
  data () {
    return {
      controlData: searchData, // 搜索模块数据
      tableHeaderData: tableData, // 列表表头数据
      pageIndex: 1, // pagination参数
      total: 20,
      currentPage: 20,
      dataList: [],
      buttonContent: [
        {
          buttonName: '下载示例',
          clickEvent: 'downDetails'
        }
      ],
      showPagination: !0,
      val: {},
      sessionData: {}
    }
  },
  computed: mapState({
    manage_data: ({ manage }) => {
      return manage
    }
  }),
  mounted () {
    this.setState()
  },
  methods: {
    ...mapActions(['manage_setPageNum', 'manage_setPageSize', 'manage_setSearchContent']),
    setState () {
    },
    handleSizeChange (pageSize) {
      // changePageSize
      this.manage_setPageSize(pageSize)
    },
    handleCurrentChange (page) {
      this.manage_setPageNum(page)
    },
    goPage () {},
    searchData (val) {
      Object.keys(val).map(k => {
        if (!val[k]) delete val[k]
      })
      this.manage_setSearchContent(val)
    },
    /**
     * 获取优惠券发放列表
     */
    getDepenseList (params) {},
    downDetails (nth) {
      // 下载明细逻辑
    }
  }
}
</script>

<style lang="scss">
.manage {
  .paginationContain {
    text-align: right;
    margin-top: 10px;
    .el-pagination__total {
      margin-top: 2px;
      margin-left: 20px;
    }
  }
}
</style>
