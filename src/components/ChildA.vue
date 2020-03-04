<template>
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button
      type="button"
      class="btn btn-primary"
      @click="triggerByAction('Child A')"
    >
      Trigger ChildA
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["triggerByAction"]),
  },
};
</script>

<style lang="scss"></style>
