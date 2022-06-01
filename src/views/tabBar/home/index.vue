<template>
  <div class="home-container">
    <!-- 返回顶部 -->
    <BackToTop></BackToTop>
    <!-- 固定搜索区域 -->

    <HomeSearchButton class="top-fixed"></HomeSearchButton>

    <!-- 站位区域 -->
    <PlaceholderContainer :height="50"></PlaceholderContainer>
    <!-- 轮播图 -->
    <HomeSwiper :images="images"></HomeSwiper>
    <!-- 入口 -->
    <Entrances :entrances="entrances"></Entrances>
    <!-- 通知栏 -->
    <HomeNotice :value="noticeBar"></HomeNotice>
    <div style="position: relative;">
      <!--更多蓝色背景区 -->
      <HomeMoreArea :value="moreArea"></HomeMoreArea>
      <!-- 商品列表 -->

      <HomeProductList class="product-list" @onLoad="onListLoad">
        <template v-slot:item>
          <van-row wrap gutter="10">
            <van-col span="8" v-for="(product, index) in products" :key="index">
              <HomeProduct :value="product" />
            </van-col>
          </van-row>
        </template>
      </HomeProductList>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HomeSwiper from './components/HomeSwiper/index'
import HomeSearchButton from './components/HomeSearchButton/index'

import HomeNotice from './components/HomeNotice/index'
import HomeMoreArea from './components/HomeMoreArea/index'
import HomeProductList from './components/HomeProductList/index'

import HomeProduct from './components/HomeProduct/index'
// 公共组件
import PlaceholderContainer from '@/components/Common/placeholderContainer/index.vue'
import Entrances from '@/components/Common/Entrances/index'
import BackToTop from '@/components/Common/BackToTop/index.vue'
import { noticeBar, moreArea } from './config'
import { IProduct } from './components/HomeProduct/index'

export default defineComponent({
  name: 'Home',
  components: {
    HomeSwiper,
    HomeSearchButton,

    HomeNotice,
    HomeMoreArea,
    HomeProduct,
    HomeProductList,
    Entrances,
    PlaceholderContainer,
    BackToTop
  },
  props: {},
  setup() {
    const images = [
      { url: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
      { url: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
      { url: 'https://img01.yzcdn.cn/vant/cat.jpeg' }
    ]
    const entrances = [
      { name: '新品推荐', url: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
      { name: '限时优惠', url: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
      { name: '优惠团购', url: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
      { name: '秒杀全场', url: 'https://img01.yzcdn.cn/vant/cat.jpeg' },
      { name: '领券中心', url: 'https://img01.yzcdn.cn/vant/cat.jpeg' }
    ]
    const products: IProduct[] = reactive([])
    // products = new Array(10).fill({
    //   url: 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    //   name: '第七代小棕瓶 STEE LA HEIHEI 第七代小棕瓶 STEE LA HEIHEI',
    //   // name: '第七代小棕瓶',
    //   price: 159
    // })
    let count = 0
    const onListLoad = (cb: any) => {
      // 查询
      setTimeout(() => {
        const result = new Array(9).fill({
          url: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          name: '第七代小棕瓶 STEE LA HEIHEI 第七代小棕瓶 STEE LA HEIHEI',
          price: 159
        })
        products.push(...result)
        count++
        // 判断接口里的某个值，看看还需加载不，如果不用那就设成false
        let hasMore = false
        if (count > 2) {
          hasMore = false
        } else {
          hasMore = true
        }

        cb & cb(hasMore)
      }, 200)
    }

    return {
      images,
      entrances,
      noticeBar,
      moreArea,
      products,
      onListLoad
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
.blank {
  height: 50px;
}
.top-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 999;
  background: #fff;
  @include center;
}
.home-container {
  position: relative;
  min-height: 100vh;
  background: #fff;
}
.product-list {
  padding: 0 10px;
  position: absolute;
  top: 50px;
}
</style>
