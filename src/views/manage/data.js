/**
 * manage页面配置项  author:murongqimiao@live.cn
 */

// 顶部搜索配置
export const searchData = {
  data: [
  /** 时间选择器组件 */
    {
      conditionName: 'startTime',
      controlName: '时间选择器',
      controlType: 'timePicker'
    },
    /** 时间区间选择器组件 */
    {
      conditionName: 'timeArea',
      controlName: '区间选择器',
      controlType: 'DoubleTimePicker'
    },
    /** 选择框组件 */
    {
      conditionName: 'ticketType',
      controlName: 'select框',
      controlType: 'select',
      options: [{
        value: 'all',
        label: '全部'
      }, {
        value: 'man',
        label: '入库'
      }, {
        value: 'woman',
        label: '出库'
      }]
    },
    /** 输入框组件 */
    {
      conditionName: 'creator',
      controlName: '发放人',
      controlType: 'input'
    }]
}

// 表格表头配置
export const tableData = {
  numbers: ['序号', '80', { sortable: true }],
  Name: ['操作员', '140', {}],
  id: ['数量', '100', {}],
  time: ['时间', '140', {}],
}
