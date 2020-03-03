import Vue from 'vue'
import App from './App.vue'
// Import 所需的 Component與底下的route匹配
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
// 此專案已經install vue-router，可以直接引用
import VueRouter from 'vue-router'

// 載入plugin
Vue.use(VueRouter);

// 定義route
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 1. 建立Vue Router Instance，並指派上述定義的routes

// 2. 指派Vue Router Instance至Vue Instance
new Vue({
  el: '#app',
  render: h => h(App)
})
