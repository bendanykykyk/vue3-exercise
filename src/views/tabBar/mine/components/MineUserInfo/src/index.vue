<template>
  <div class="user-info-container" @click="handleLogin">
    <van-image v-if="value?.avator" class="image" fit="cover" :src="value?.avator"></van-image>
    <van-image
      v-else
      class="image"
      fit="cover"
      src="https://b.yzcdn.cn/vant/icon-demo-1126.png"
    ></van-image>
    <span class="text">{{ value?.author || '立刻登录' }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IUserInfo } from '@/api/interface'
export default defineComponent({
  name: 'HomeNotice',

  props: {
    value: {
      // 这里校验的时候，虽然传入值的地方会报错，但是在这个文件去使用的时候没有提示和编译报错
      type: Object as PropType<IUserInfo>,
      required: true
    }
  },
  components: {},
  setup(props, context) {
    const handleLogin = () => {
      // 这里其实判断一下本地或者接口有没有登录啥的
      console.log('跳转')
    }
    return {
      handleLogin
    }
  }
})
</script>

<style lang="scss" scoped>
.user-info-container {
  width: 375px;
  height: 130px;
  background: #fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  .image {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 30px;
  }
  .text {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
