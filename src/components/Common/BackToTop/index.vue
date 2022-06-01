<template>
  <div class="toTop-container" v-show="visibility" @click="scrollTo(0, 0)">
    <van-icon name="back-top" size="0.6rem" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useScrollPosition } from '../../../hooks/useScrollPosition'
export default defineComponent({
  name: 'BackToTop',
  props: {
    height: {
      type: Number,
      default: 50
    }
  },
  components: {},
  setup() {
    const visibility = ref(false)
    const { scrollTop, scrollTo } = useScrollPosition()
    watch(scrollTop, (newVal, oldVal) => {
      if (newVal > 1200) {
        visibility.value = true
      } else {
        visibility.value = false
      }
    })

    return {
      visibility,
      scrollTo
    }
  }
})
</script>

<style lang="scss" scoped>
.toTop-container {
  z-index: 1000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 100px;
  right: 20px;
  background: #fff;
}
</style>
