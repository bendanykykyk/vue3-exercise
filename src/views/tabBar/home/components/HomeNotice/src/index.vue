<template>
  <div class="notice-container">
    <van-cell value="详情" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div class="content">
          <van-tag type="danger">{{ value['warn-text'] }}</van-tag>
          <span>{{ value.content }}</span>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { INoticeBar } from '../../HomeNotice/index'

export default defineComponent({
  name: 'HomeNotice',
  props: {
    value: {
      // 这里校验的时候，虽然传入值的地方会报错，但是在这个文件去使用的时候没有提示和编译报错
      type: Object as PropType<INoticeBar>,
      required: true
    }
  },
  components: {},
  setup(props, context) {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.notice-container {
  .content {
    display: flex;
    align-items: center;
    span:nth-child(2) {
      margin-left: 5px;
    }
  }
}
</style>
