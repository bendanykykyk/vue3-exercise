<template>
  <div class="placeholder-container" :style="{ height: height + 'px' }"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'index',
  props: {
    height: {
      type: Number,
      default: 50
    }
  },
  components: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
