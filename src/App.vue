<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <ul class="nav nav-tabs">
          <!-- 3. 使用 router-link 组件來進行路由連結設定. -->
          <!-- tip1: 通過傳入 `to` 属性指定連結. -->
          <!-- tip2: router-link會自動渲染成<a></a> -->
          <li><router-link to="/foo">Foo</router-link></li>
          <li><router-link to="/bar">Bar</router-link></li>
        </ul>
        <!-- 4. 路由匹配到的组件将利用router-view渲染在此 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss"></style>
