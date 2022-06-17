<template>
  <div class="form-input">
    <van-uploader
      :value="value"
      :file-list="value"
      :placeholder="placeholderComp"
      :disabled="isDisabled(item)"
      :after-read="afterRead"
      @delete="deletePic"
      v-bind="$attrs"
      preview-size="60px"
      multiple
      :max-count="1"
    />
  </div>
</template>
<script>
import { uploader } from '@/api/uploader'
export default {
  name: 'FormUploader',
  components: {},
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    placeholderComp() {
      return this.item.props.placeholder ? this.item.props.placeholder : `请输入${this.item.label}`
    },

    isDisabled() {
      return (item) => {
        if (typeof item.disabled === 'boolean') {
          return item.disabled
        } else if (typeof item.disabled === 'function') {
          // console.log('111')

          return Boolean(item.disabled())
        } else {
          return false
        }
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},

  methods: {
    async afterRead(file) {
      const formData = new FormData()
      formData.append('type', 1)
      formData.append('file', file.file)
      const res = await uploader(formData)
      const value = [...this.value]
      value.push({ url: res.data })
      this.$emit('input', value)
    },
    deletePic(item, index) {
      const value = [...this.value]
      value.splice(index, 1)
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss" scoped></style>
