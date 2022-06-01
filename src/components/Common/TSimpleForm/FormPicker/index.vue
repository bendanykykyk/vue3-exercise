<template>
  <div class="form-input">
    <van-field
      :value="
        typeof item.typeData()[0] === 'object'
          ? item.typeData().find((item) => item.value === value).label
          : value
      "
      :placeholder="placeholderComp"
      v-bind="$attrs"
      @input="onInput"
      disabled
      @click="handleInputClick"
    />
    <van-popup v-model="show" position="bottom" :style="{ height: '35%' }">
      <van-picker
        :value="value"
        :columns="item.typeData()"
        value-key="label"
        show-toolbar
        :placeholder="placeholderComp"
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
    onConfirm(e) {
      this.show = false
      this.$emit('input', typeof e === 'object' ? e.value : e)
    },
    onCancel(e) {
      this.show = false
    },
    handleInputClick() {
      // console.log('hehe')
      this.show = true
    }
  }
}
</script>
<style lang="scss" scoped></style>
