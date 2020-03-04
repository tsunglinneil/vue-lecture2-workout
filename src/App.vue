<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters</h1>
        <!-- 1. 建立一個儲存字串的資料變數，利用filters計算字串長度，並顯示如: test (4) -->
        <p>Filter: {{ message | getDescibeByFilter }}</p>

        <!-- 2. 實現上述功能但是這次使用computed實現 -->
        <p>Computed: {{ getDescibeByComputed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "test",
    };
  },
  filters: {
    getDescibeByFilter(value) {
      return `${value} (${value.length})`;
    },
  },
  computed: {
    getDescibeByComputed() {
      return `${this.message} (${this.message.length})`;
    },
  },
};
</script>

<style></style>
