<template>
  <div class="swiper-container">
    <!-- 轮播图 -->
    <van-config-provider :theme-vars="themeVars">
      <van-swipe class="swipe" :autoplay="3000" lazy-render>
        <van-swipe-item class="swipe-item" v-for="image in images" :key="image.url">
          <van-image class="image" :src="image.url" fit="cover" />
        </van-swipe-item>
      </van-swipe>
    </van-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { swipeStyle } from '../../HomeSwiper/index'
import type{ ISwiperItem} from '../../HomeSwiper/index'
// import {  } from './types/index'
export default defineComponent({
  name: 'HomeSwiper',
  props: {
    images: {
      type: Array as PropType<ISwiperItem[]>,
      default: () => []
    },
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
    const themeVars = { ...swipeStyle }
    return {
      themeVars
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swipe {
  width: 375px;
  height: 220px;

  .swipe-item {
    @include center;
    border-top: 1px solid #f7f7f7;
    .image {
      width: 360px;
      height: 200px;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 2px 2px 2px 8px rgba($color: #f7f7f7, $alpha: 0.5);
    }
  }
  ::v-deep .van-swipe__indicators {
    bottom: 20px;
  }
}
</style>
