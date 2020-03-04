<template>
  <div class="container">
    <!-- 
        已定義兩個Child Component ChildA以及ChildB，分別有一個按鈕
        1. 自Central Store取得指定之state資訊在下方呈現預設的狀態 ==> Current Trigger Component: None
        2. 當點選任一按鈕時，須更新Central Store state的狀態，並在下方呈現當前被觸發的Component
        (例如：Current Trigger Component: ChildA 即表示ChildA Component的按鈕被點選)  

        tip1: 自Central Store取得指定之state可利用getters或$store.state.stateName取得
        tip2: 可利用Sync(Mutations)或是Async(Actions)的方式更新狀態
        tip3: Component按鈕被觸發執行時可利用mapMutations或是mapActions引入欲執行方法
        tip4: Component按鈕被觸發執行時可利用$store.commit('mutations function name')或是$store.dispatch('actions function name')
       -->
    <div class="row">
      <div
        class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
      ></div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Vuex Workout</h4>
        </div>
        <div class="panel-body">
          Current Trigger Component: {{ currentTrigger }}
        </div>
      </div>
    </div>
    <div
      class="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <app-child-a></app-child-a>
      <app-child-b></app-child-b>
    </div>
  </div>
</template>

<script>
import ChildA from "./components/ChildA.vue";
import ChildB from "./components/ChildB.vue";

import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentTrigger"]),
  },
  components: {
    appChildA: ChildA,
    appChildB: ChildB,
  },
};
</script>

<style lang="scss"></style>
