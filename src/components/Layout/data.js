// 侧边栏数据
const sidebarData = [{
  navName: '数据',
  path: '/',
  icon: 'el-icon-document'
},{
  navName: '管理',
  path: '/',
  icon: 'el-icon-news',
  children: [{
    name: '出入管理',
    path: 'manage'
  }]
}, {
  navName: '图表',
  path: '/graph',
  icon: 'el-icon-edit-outline',
  children: [{
    name: 'check map',
    path: '/table1'
  }]
}]

// 默认路由集合数据
const routerGather = [{
  navName: '首页',
  canDel: false,
  path: '/'
}]

export { sidebarData, routerGather }