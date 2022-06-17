import { ref, watch } from 'vue'

export const useVModelFormData = (props: any, context: any) => {
  const formData = ref({ ...props.modelValue })

  watch(
    formData,
    (newVal) => {
      context.emit('update:modelValue', newVal)
    },
    { deep: true }
  )

  return {
    formData
  }
}
