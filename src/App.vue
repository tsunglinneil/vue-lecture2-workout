<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters</h1>
        <h4>By Filters</h4>
        <p>{{ greeting | countLengthFilters }}</p>
        <hr />
        <!-- 1. 使用Mixins的方式共享computed properties -->
        <h4>By Computed</h4>
        <p>{{ countLengthComputed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { countLengthComputed } from "./countLengthMixins";

export default {
  mixins: [countLengthComputed],
  data() {
    return {
      greeting: "Hello",
    };
  },
  filters: {
    countLengthFilters(value) {
      return `${value} (${value.length})`;
    },
  },
};
</script>

<style></style>
