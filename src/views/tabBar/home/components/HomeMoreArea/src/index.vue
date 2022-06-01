<template>
  <div class="more-container">
    <div class="bg-area">
      <div class="headline">
        <div class="title">{{ value.title }}</div>
        <div class="more-btn">{{ value.linkText }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IMoreArea } from '../types'

export default defineComponent({
  name: 'HomeMoreArea',
  props: {
    value: {
      type: Object as PropType<IMoreArea>,
      require: true
    }
  },
  components: {},
  setup(props, context) {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.more-container {
  .bg-area {
    width: 375px;
    height: 180px;
    background-color: #3e99d6;

    .headline {
      padding: 20px 15px 15px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 18px;
        font-weight: 700;
        color: #fff;
      }
      .more-btn {
        width: 90px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        border-radius: 28px;
        background: #66addf;
      }
    }
  }
}
</style>
