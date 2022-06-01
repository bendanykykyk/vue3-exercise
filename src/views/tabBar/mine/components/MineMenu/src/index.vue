<template>
  <div class="menu-bar-container">
    <div v-for="(menu, index) in menus" :key="index">
      <!-- 这里遍历组件 -->
      <van-cell :title="menu.name" is-link @click="$router.push({ name: 'UserRegister' })">
        <template #title>
          <van-icon
            class-prefix="iconfont"
            :class="menu.icon"
            style="margin-right: 10px;"
            size="24px"
          ></van-icon>
          <span>{{ menu.name }}</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { IMenuBar } from '../types'
export default defineComponent({
  name: 'MineMenu',

  props: {
    menus: {
      // 这里校验的时候，虽然传入值的地方会报错，但是在这个文件去使用的时候没有提示和编译报错
      type: Array as PropType<IMenuBar[]>
    }
  },
  components: {},
  setup(props, context) {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.menu-bar-container {
}
</style>
