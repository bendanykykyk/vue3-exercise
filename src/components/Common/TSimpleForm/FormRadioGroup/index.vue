<template>
  <div class="form-input">
    <!-- <van-switch
      :value="value"
      :placeholder="placeholderComp"
      :disabled="isDisabled(item)"
      v-bind="$attrs"
      @input="onInput"
      size="0.5rem"
    /> -->
    <van-radio-group
      style="display: flex; flex-wrap: wrap; width: 100%"
      :value="value"
      @change="onInput"
      v-bind="$attrs"
    >
      <!-- v-on="$listeners" -->
      <van-radio
        style="margin: 0 2px 2px 0px; flex: 0 0 45%"
        checked-color="#2CC49E"
        v-for="(item, index) in item.typeData()"
        :name="item.value"
        :key="index"
        >{{ item.label }}</van-radio
      >
    </van-radio-group>
  </div>
</template>
<script>
export default {
  name: 'FormCheckboxGroup',
  components: {},
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    value: {
      type: [Array],
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
    onInput(e) {
      console.log(e)
      this.$emit('input', e)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .van-radio__label {
  width: 150px;
}
</style>
