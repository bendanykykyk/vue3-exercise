<template>
  <div class="index-container">
    <Child :params="obj"></Child>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Child from './components/ChildCompoents/index.vue'
export default defineComponent({
  name: 'index',
  components: {
    Child
  },
  setup() {
    const obj = reactive({
      mobile: ''
    })

    return {
      obj
    }
  }
})
</script>

<style lang="scss" scoped></style>
