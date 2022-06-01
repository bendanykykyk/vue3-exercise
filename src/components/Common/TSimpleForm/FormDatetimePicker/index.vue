<template>
  <div class="form-input">
    <van-field :value="value" :placeholder="placeholderComp" disabled @click="handleInputClick" />
    <van-popup v-model="show" position="bottom" :style="{ height: '35%' }">
      <van-datetime-picker
        :value="value"
        show-toolbar
        :disabled="isDisabled(item)"
        v-bind="$attrs"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  name: 'FormSwitch',
  components: {},
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      show: false
    }
  },
  created() {
    console.log(this.item)
  },
  computed: {
    placeholderComp() {
      return this.item.props.placeholder ? this.item.props.placeholder : `请选择${this.item.label}`
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

  mounted() {},

  methods: {
    onConfirm(e) {
      this.show = false
      if (this.item.props.type === 'time') {
        this.$emit('input', e)
      } else {
        this.$emit(
          'input',
          this.$dayjs(e).format(this.item.props.format ? this.item.props.format : 'YYYY-MM-DD')
        )
      }
    },
    onCancel(e) {
      this.show = false
    },
    handleInputClick() {
      this.show = true
    }
  }
}
</script>
<style lang="scss" scoped></style>
