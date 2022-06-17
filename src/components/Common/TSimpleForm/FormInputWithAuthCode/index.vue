<template>
  <div class="form-input">
    <van-config-provider :theme-vars="item?.configProvider">
      <van-field
        style="background: none;"
        :placeholder="placeholderComp"
        :disabled="isDisabled(item)"
        v-bind="$attrs"
      >
        <template #button>
          <van-button
            size="small"
            style="width: 100px;"
            type="primary"
            @click="handleSendBtnClick"
            :disabled="isSend"
          >
            <span v-if="isSend">{{ currentNumber }}s</span>
            <span v-else>发送验证码</span>
          </van-button>
        </template>
      </van-field>
    </van-config-provider>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useCountDown } from './hook/useCountDown'
import { IFormItem } from '../types'
import { useFormItemDefault } from '../hook/useFormItemDefault'

export default defineComponent({
  name: 'FormInputWithAuthButton',
  props: {
    item: {
      type: Object as PropType<IFormItem>,
      require: true
    }
    // value: {
    //   type: String || Number,
    //   require: true
    // }
  },
  emits: ['input'],
  components: {},
  setup(props, context) {
    // 表单项默认数据处理
    const { isDisabled, placeholderComp } = useFormItemDefault(props)
    // 表单倒计时
    const { isSend, countDown, currentNumber } = useCountDown()
    const handleSendBtnClick = () => {
      isSend.value = true
      countDown()
    }

    return {
      placeholderComp,
      isDisabled,
      handleSendBtnClick,
      isSend,
      currentNumber
    }
  }
})
</script>
<style lang="scss" scoped></style>
