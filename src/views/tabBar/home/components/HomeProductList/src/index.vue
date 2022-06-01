<template>
  <div class="list-container">
    <!-- <van-pull-refresh v-model="ListConfig.refreshing" @refresh="onRefresh"> -->
    <van-pull-refresh v-model="ListConfig.refreshing" :disabled="true">
      <van-list
        v-model:loading="ListConfig.loading"
        :finished="ListConfig.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <slot name="item"></slot>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

export default defineComponent({
  name: 'HomeList',
  props: {
    item: {
      // type: Object as PropType<IList>,
      type: Object,
      require: true
    }
  },
  emits: ['onLoad'],
  components: {},
  setup(props, context) {
    const ListConfig = reactive({
      loading: false,
      finished: false,
      refreshing: false
    })
    const onLoad = () => {
      context.emit('onLoad', (isGoOn: boolean) => {
        if (isGoOn) {
          ListConfig.loading = false
        } else {
          ListConfig.finished = true
        }
      })
    }
    return {
      ListConfig,
      onLoad
    }
  }
})
</script>

<style lang="scss" scoped>
.list-container {
}
</style>
