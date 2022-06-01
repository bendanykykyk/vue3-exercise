<template>
  <div class="product-container">
    <van-image class="image" fit="cover" :src="value?.url"></van-image>
    <div class="name overflow-text">{{ value?.name }}</div>
    <div class="price">￥{{ value?.price }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IProduct } from '../types'

export default defineComponent({
  name: 'HomeProduct',
  props: {
    value: {
      type: Object as PropType<IProduct>,
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
.product-container {
  width: 110px;
  height: 171px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  box-shadow: 2px 1px 5px #e0ebf3;
  overflow: hidden;
  margin-top: 20px;
  .image {
    width: 110px;
    height: 110px;
  }
  .name {
    position: relative;
    top: -7px;
    font-size: 14px;
    height: 25px;
    padding: 0 5px;
    font-weight: 500;
  }
  .price {
    position: relative;
    top: -7px;
    font-size: 16px;
    color: #e22f2f;
    padding: 0 5px;
    // display: flex;
    // align-items: center;
  }
}

.overflow-text {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
