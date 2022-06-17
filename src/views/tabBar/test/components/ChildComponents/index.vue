<template>
  <div class="child-container">
    {{ params }}
    <van-button @click="handleClick">更改父组件的值</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
interface IFormData {
  mobile: string
}
export default defineComponent({
  name: 'Test',

  props: {
    params: {
      type: Object,
      require: true
    }
  },
  setup(props, context) {
    const handleClick = () => {
      const formData: any = props.params
      formData['mobile'] = '123'
    }
    onMounted(() => {
      console.log('i am rendered again')
    })
    return {
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped></style>
