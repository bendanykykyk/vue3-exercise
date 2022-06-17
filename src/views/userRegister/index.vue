<!-- about -->
<template>
  <div class="user-register_container">
    <!-- logo区域 -->
    <div class="logo-container">
      <van-image class="image" :src="require('../../assets/image/fish_logo.jpg')"></van-image>
    </div>
    <!-- 这里可以控制表单整体大小 -->
    <TSimpleForm style="padding: 20px;" v-model="formData" :fieldList="fieldList"> </TSimpleForm>
    <!-- 登录跳转按钮-->
    <RegisterLoginPanel></RegisterLoginPanel>
    <!-- 注册按钮区域 -->
    <div class="btn-group">
      <van-button type="success" style="width: 100%">注册</van-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// 子组件
import RegisterLoginPanel from './components/RegisterLoginPanel'
// 公共组件
import TSimpleForm from '@/components/Common/TSimpleForm/index.vue'
import { IFormItem } from '@/components/Common/TSimpleForm/types'
export default defineComponent({
  name: 'Mine',
  props: {},
  components: {
    TSimpleForm,
    RegisterLoginPanel
  },
  setup() {
    const formData = ref({
      mobile: ''
    })

    const fieldList: IFormItem[] = [
      {
        type: 'input',
        label: '+86',
        key: 'mobile',
        props: {
          placeholder: '请输入手机号'
        },
        // vant3提供的一些样式配置
        configProvider: {
          fieldPlaceholderTextColor: '#808080'
        },
        // 整个表单项配置
        style: {
          background: '#F8F8F8'
        }
      },
      {
        type: 'inputWithAuthCode',
        label: '验证码',
        key: 'code',
        props: {
          placeholder: '请输入验证码'
        },
        configProvider: {
          fieldPlaceholderTextColor: '#808080'
        },
        // 整个表单项配置
        style: {
          background: '#F8F8F8'
        }
      },
      {
        type: 'checkBox',
        label: '',
        key: 'isAgree',
        props: {
          text: '已阅读并同意'
        },
        configProvider: {},
        // 整个表单项配置
        style: {}
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
  background: #fff;
  .logo-container {
    width: 100%;
    padding: 60px 0 30px 0;
    text-align: center;
    .image {
      width: 100px;
      height: 100px;
    }
  }
}
.btn-group {
  // margin-top: 10px;
  padding: 15px;
}
</style>
