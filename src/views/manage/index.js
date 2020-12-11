/**
 * 这里生成的是一级路由的引入页
 */

import Route from 'model/route'
import manage from './manage'

export default [
  Route.new('/manage', manage, '数据查询'),
]
