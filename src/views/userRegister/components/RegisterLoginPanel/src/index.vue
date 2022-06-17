<template>
  <div class="login-panel-container">
    <div>
      <span style="color:#4BB9FF">去登录</span>
      <van-icon name="arrow" color="#4BB9FF" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RegisterLoginPanel',

  props: {
    // value: {
    //   type: String,
    //   required: true
    // }
  },
  components: {},
  setup(props, context) {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.login-panel-container {
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
}
</style>
