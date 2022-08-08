// 全局方法

import Vue from 'vue'
let show = () => console.log('全局方法')

Vue.prototype.$show = show // 服务端钩子内部不可以使用  服务端this不会指向vue实例

// 全局过滤器
import * as filters from '../assets/js/filter.js'

Object.keys(filters).forEach(key=>Vue.filter(key, filters[key]))