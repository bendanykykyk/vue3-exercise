<template>
  <div class="entrances-container">
    <div class="entrance" v-for="entrance in entrances" :key="entrance.name">
      <van-icon
        v-if="entrance.isIcon"
        class-prefix="iconfont"
        size="0.8rem"
        :class="entrance.url"
        color="#479CD8"
      ></van-icon>
      <van-image v-else class="image" fit="cover" :src="entrance.url"></van-image>
      <span class="text">{{ entrance.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IEntrance } from '../../Entrances/index'

export default defineComponent({
  name: 'HomeEntrances',
  props: {
    entrances: {
      type: Array as PropType<IEntrance[]>,
      default() {
        return []
      }
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
    return {}
  }
})
</script>

<style lang="scss" scoped>
.entrances-container {
  width: 375px;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #fafafa;

  .entrance {
    display: flex;
    flex: 0 0 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .text {
      margin-top: 18px;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
