<!-- about -->
<template>
  <div class="user-register_container">
    <!-- logo区域 -->
    <div class="logo-container">
      <van-image class="image" :src="require('../../assets/image/fish_logo.jpg')"></van-image>
    </div>

    <TSimpleForm :formData="formData" :fieldList="fieldList"></TSimpleForm>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

// 公共组件
import TSimpleForm from '@/components/Common/TSimpleForm/index.vue'
export default defineComponent({
  name: 'Mine',
  props: {},
  components: {
    TSimpleForm
  },
  setup() {
    const formData = ref({
      mobile: '',
      name: ''
    })

    const fieldList: any = [
      {
        type: 'input',
        label: '手机号',
        key: 'mobile',
        props: {}
      }
    ]
    return {
      formData,
      fieldList
    }
  }
})
</script>
<style lang="scss" scoped>
.user-register_container {
  min-height: 100vh;
  background: #f7f7f7;
  .logo-container {
    width: 100%;
    margin-top: 60px;
    text-align: center;
    .image {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
