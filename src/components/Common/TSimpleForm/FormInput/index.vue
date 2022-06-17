<template>
  <div class="form-input">
    <!-- <van-field
      :value="value"
      :placeholder="placeholderComp"
      :disabled="isDisabled(item)"
      v-bind="$attrs"
      @update:model-value="onInput"
    /> -->
    <van-config-provider :theme-vars="item?.configProvider">
      <van-field
        style="background: none;"
        :placeholder="placeholderComp"
        :disabled="isDisabled(item)"
        v-bind="$attrs"
      >
      </van-field>
    </van-config-provider>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

import { IFormItem } from '../types'

export default defineComponent({
  name: 'Mine',
  props: {
    item: {
      type: Object as PropType<IFormItem | undefined>,
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
    const isDisabled = computed(() => {
      return (item: IFormItem | undefined) => {
        if (typeof item?.disabled === 'boolean') {
          return item.disabled
        } else if (typeof item?.disabled === 'function') {
          return Boolean(item.disabled())
        } else {
          return false
        }
      }
    })

    const placeholderComp = computed(() => {
      return props.item?.props.placeholder
        ? props.item.props.placeholder
        : `请输入${props.item?.label}`
    })

    // const onInput = (e: any) => {

    //   context.emit('input', e)
    // }

    return {
      placeholderComp,
      isDisabled
      // onInput
    }
  }
})
</script>
<style lang="scss" scoped></style>
