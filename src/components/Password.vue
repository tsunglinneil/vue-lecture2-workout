<template>
    <!-- 密碼 -->
    <div class="form-group">
        <label for="password">密碼</label>
        <input
            type="password"
            id="password"
            class="form-control"
            :value="value"
            @input="passwordChange"
        />
    </div>
</template>

<script>
export default {
    props: ["value"],
    methods: {
        passwordChange(event) {
            this.$emit("input", event.target.value);
        },
    },
};
</script>

<style scoped></style>
