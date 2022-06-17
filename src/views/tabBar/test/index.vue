<template>
  <div class="index-container">
    <Child :params="obj" :key="key"></Child>

    <button @click="handleChange">修改</button>
    <button @click="handleChangeComp">刷新组件</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import Child from './components/ChildComponents/index.vue'
import { inject } from 'vue'
export default defineComponent({
  name: 'Test',
  components: {
    Child
  },

  setup() {
    const obj = ref({
      name: 'yk'
    })

    const handleChange = () => {
      obj.value.name = 'heihei'
    }

    const key = ref(Math.random() * 1000)
    const handleChangeComp = () => {
      key.value = Math.random() * 1000
    }
    return {
      obj,
      key,
      handleChange,
      handleChangeComp
    }
  }
})
</script>

<style lang="scss" scoped></style>
