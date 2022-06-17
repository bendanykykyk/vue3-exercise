import { computed } from 'vue'
import { IFormItem } from '../types'

export const useFormItemDefault = (props: any) => {
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

  return {
    isDisabled,
    placeholderComp
  }
}
