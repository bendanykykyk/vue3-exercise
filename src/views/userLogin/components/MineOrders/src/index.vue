<template>
  <div class="orders-container">
    <!-- 更多 -->
    <div class="more">
      <van-cell title="我的订单" is-link value="查看更多" />
    </div>
    <!-- 入口 -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'HomeNotice',

  props: {},
  components: {},
  setup(props, context) {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.orders-container {
  .more {
    border-bottom: 1px solid #f7f7f7;
  }
}
</style>
