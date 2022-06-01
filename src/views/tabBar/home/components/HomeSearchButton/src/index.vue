<template>
  <div class="swiper-container">
    <div class="search-btn">
      <van-icon size="0.5rem" name="search" />
      <span>搜索</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

// import {  } from './types/index'
export default defineComponent({
  name: 'HomeSwiper',
  props: {
    // 接受一些外部的配置项
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-btn {
  width: 350px;
  height: 30px;
  background: #f7f7f7;
  border-radius: 20px;
  @include center;
  color: #bbbbbb;
  font-size: 14px;
}
</style>
