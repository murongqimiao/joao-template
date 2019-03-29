/**
 * 一键粘贴
 * @param  {String} id [需要粘贴的内容]
 * @param  {String} attr [需要 copy 的属性，默认是 innerText，主要用途例如赋值 a 标签上的 href 链接]
 *
 * range + selection
 *
 * 1.创建一个 range
 * 2.把内容放入 range
 * 3.把 range 放入 selection
 *
 * 注意：参数 attr 不能是自定义属性
 * 注意：对于 user-select: none 的元素无效
 * 注意：当 id 为 false 且 attr 不会空，会直接复制 attr 的内容
export function copyText (val, cb) {
  const _input = document.createElement('input')
  document.body.appendChild(_input)
  _input.setAttribute('value', val)
  _input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    console.log('复制成功')
    cb && cb()
  }
  document.body.removeChild(_input)
}
 */

/**
*  提供内部公共方法
*  this.$m.getMobilePhoneType()
*/
let utils = {}

utils.install = function (Vue) {
  Vue.prototype.$m = {
    // 判断手机类型
    getMobilePhoneType: function () {
      const ua = navigator.userAgent
      if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
        return 'ANDROID'
      } else if (ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        return 'IOS'
      }
      return null
    },
    // 组装银行卡尾号
    getBankCardTailNumber: function (str) {
      return `（尾号${str.substr(str.length - 4, str.length)}）`
    },
    getSearch: function (searchKey, searchContent) {
      const value = ''
      const search = searchContent || location.search // 地址栏里的查询字符串
      const searchList = search.slice(1).split('&')

      for (let i = 0; i < searchList.length; i++) {
        const item = searchList[i]
        let key = ''
        const equal = item.indexOf('=')
        key = item.substr(0, equal)
        if (key === searchKey) {
          return decodeURIComponent(item.substr(equal + 1, item.length))
        }
      }
      return value
    },
    copyText: function (val, cb) {
      const _input = document.createElement('input')
      document.body.appendChild(_input)
      _input.setAttribute('value', val)
      _input.select()
      if (document.execCommand('copy')) {
        document.execCommand('copy')
        console.log('复制成功')
        cb && cb()
      }
      document.body.removeChild(_input)
    },
    convertToDate: function (dateStr, format) {
      if (!dateStr) {
        return ''
      }

      let date = new Date(dateStr.replace(/-/g, '/'))
      return !format ? `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日` : format.replace('yyyy', date.getFullYear()).replace('MM', date.getMonth() + 1).replace('dd', date.getDate())
    },
    bankCardFormat: function (val, oldVal) {
      let realVal = val ? val.replace(/\s/g, '') : ''

      if (!realVal || !/^\d*$/.test(realVal)) {
        return {}
      }

      return {
        formatVal: realVal.match(/\d{1,4}/g).reduce((pre, unit, index) => {
          return pre + ' ' + unit
        }, '').slice(1),
        realVal: realVal
      }
    },
    telFormat: function (val) {
      if (!val) {
        return {}
      }

      let realVal = val.replace(/\s/g, '')
      const attachSpace = v => v ? (' ' + v) : ''

      return {
        formatVal: val.slice(0, 3) + attachSpace(realVal.slice(3, 7)) + attachSpace(realVal.slice(7, 11)),
        realVal: realVal
      }
    },
    formatNumber: function (s, n) {
      n = n >= 0 && n <= 20 ? n : 2
      s = parseFloat((s + '').replace(/[^\d.-]/g, '')).toFixed(n) + ''
      let l = s.split('.')[0].split('').reverse()
      let r = s.split('.')[1]
      r = (r === null ? '' : '.' + r)
      let t = ''
      for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
      }
      return t.split('').reverse().join('') + r
    }
  }
}
