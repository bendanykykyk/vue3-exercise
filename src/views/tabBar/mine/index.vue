<!-- about -->
<template>
  <div class="mine_container">
    <MineUserInfo :value="user.userInfo" />
    <MineOrders style="margin-top: 10px"></MineOrders>
    <Entrances :entrances="entrances" style="background: #FFF;"></Entrances>
    <MainMenu :menus="menus" style="margin-top: 10px"></MainMenu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// 子组件
import MineUserInfo from './components/MineUserInfo'
import MineOrders from './components/MineOrders'
import { IAuthState } from '@/store/modules/Auth/interface'
import Entrances, { IEntrance } from '@/components/Common/Entrances'
import MainMenu from './components/MineMenu'
import { entrances, menus } from './config'

// 公共组件
export default defineComponent({
  name: 'Mine',
  props: {},
  components: {
    MineUserInfo,
    MineOrders,
    Entrances,
    MainMenu
  },
  setup() {
    // 请求数据，是否登录,这里就当是请求过了，通过isLogin控制状态
    const user: IAuthState = {
      userInfo: {
        author: '小明',
        avator: 'https://img01.yzcdn.cn/vant/cat.jpeg'
      },
      isAuth: true,
      code: '1234'
    }

    return {
      user,
      entrances,
      menus
    }
  }
})
</script>
<style lang="scss" scoped>
.mine-container {
  min-height: 100vh;
  background: #f7f7f7;
}
</style>
