<template>
  <div class="container">
    <!-- 1. 建立一個註冊表單能夠使用者註冊資訊呈現在[註冊資訊欄]區塊當中 -->
    <!-- 2. 將帳號區塊設計成Component，命名為Account.vue，需維持原功能 -->
    <!-- 3. 新增一個狀態記錄使用者是按下送出，若按下送出則使畫面只呈現[註冊資訊欄]區塊 -->

    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>註冊會員</h1>
          <hr />
          <!-- 帳號 -->
          <div class="form-group">
            <label for="account">帳號</label>
            <input type="text" id="account" class="form-control" />
          </div>
          <!-- 密碼 -->
          <div class="form-group">
      
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary">送出</button>
        </div>
      </div>
    </form>
    <hr />
    <!-- 註冊資訊欄 -->
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>註冊資訊欄</h4>
          </div>
          <div class="panel-body">
            <p>帳號: </p>
            <p>密碼: </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
  components: {
  }
};
</script>

<style lang="scss">
</style>
