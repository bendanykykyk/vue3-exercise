<template>
  <van-form ref="form" input-align="left" label-width="80px">
    <div v-for="(item, index) in fieldList" :key="index" label-align="right" class="form-item">
      <van-field v-if="isShow(item)" :prop="item.key" :rules="item.rules" :label="item.label + ':'">
        <!-- 自定义label  -->
        <!-- <template #label>
            <span>
              {{ item.label }}
            </span>
            <span v-if="item.hint">
              <el-popover placement="top-start" title="提示" width="300" trigger="hover" :content="item.hint">
                <i class="el-icon-question" slot="reference"></i>
              </el-popover>
            </span>
          </template> -->
        <!-- @change主要是做一个赋值操作 -->
        <template #input>
          <component
            style="display: flex; align-items: center"
            :is="compChildName(item)"
            :item="item"
            :value="formData[item.key]"
            v-bind="{ ...item.props }"
            v-on="{ ...item.events }"
            @input="(value) => onInput(item.key, value)"
            @change="(value) => onChange(item.key, value)"
            @changeFile="(value, file) => onChangeFile(item.key, value, file)"
          />
        </template>
      </van-field>
    </div>

    <!-- 按钮组 -->
    <!-- <div
      :class="mode == 'list' ? 'list-btn-group' : 'page-btn-group'"
      style="margin-bottom: 20px; display: flex; justify-content: center"
    >
      <div v-for="(buttonItem, index) in operatorList" :key="index">
        <el-button
          v-if="isShow(buttonItem)"
          :type="buttonItem.type"
          size="small"
          :icon="buttonItem.icon"
          class="btn"
          @click="buttonItem.func"
        >
          {{ buttonItem.label }}
        </el-button>
      </div>
    </div> -->
  </van-form>
</template>
<script>
import FormInput from '@/components/Common/TSimpleForm/FormInput/index'
// import FormSwitch from '@/components/Common/TSimpleForm/FormSwitch/index'
// import FormStepper from '@/components/Common/TSimpleForm/FormStepper/index'
// import FormPicker from '@/components/Common/TSimpleForm/FormPicker/index'

// import FormDatetimePicker from '@/components/Common/TSimpleForm/FormDatetimePicker/index'

// import FormRadioGroup from '@/components/Common/TSimpleForm/FormRadioGroup/index'
// import FormCheckboxGroup from '@/components/Common/TSimpleForm/FormCheckboxGroup/index'

export default {
  name: 'TSimpleForm',
  components: {
    FormInput
    // FormSwitch,
    // FormStepper,
    // FormPicker,
    // FormDatetimePicker,

    // FormRadioGroup,
    // FormCheckboxGroup
  },
  props: {
    formData: {
      type: Object,
      default: () => {}
    },
    fieldList: {
      type: Array,
      default: () => []
    },
    operatorList: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => {}
    },
    mode: {
      type: String,
      default: 'page' // list 和 page 控制样式
    }
  },
  data() {
    return {}
  },
  computed: {
    compChildName() {
      return (item) => {
        const name = {
          // 后续增加
          input: 'FormInput'
          // switch: 'FormSwitch',
          // select: 'FormSelect',
          // radioGroup: 'FormRadioGroup',
          // picker: 'FormPicker',
          // datetimePicker: 'FormDatetimePicker',
          // stepper: 'FormStepper',
          // checkboxGroup: 'FormCheckboxGroup',
        }[item.type]
        return name
      }
    },
    isShow() {
      return (item) => {
        if (typeof item.display === 'boolean') {
          return item.display
        } else if (typeof item.display === 'function') {
          // console.log('111')

          return item.display()
        } else {
          return true
        }
      }
    }
  },
  watch: {},
  created() {},
  mounted() {
    console.log(this.$refs['form'])
  },

  methods: {
    onChange(key, value) {
      this.$set(this.formData, key, value)
      this.$forceUpdate()
    },
    onInput(key, value) {
      this.$set(this.formData, key, value)
      this.$forceUpdate()
    },
    onChangeFile(key, value, file) {
      this.$set(this.formData, key, value)
      this.$set(this.formData, 'file', file.raw)
      // this.$forceUpdate()
    },
    // 校验
    validate() {
      console.log('触发校验')
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid) => {
          if (valid) {
            resolve({
              valid,
              formData: this.formData
            })
          } else {
            reject({
              valid,
              formData: null
            })
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.van-field {
  display: flex;
  align-items: center;
}
::v-deep .van-cell {
  padding: 3px 10px 3px 10px;
}

::v-deep .van-field__control {
  padding: 0;
}
.form-item {
  border-bottom: 1px solid rgba(200, 182, 159, 0.1);
  min-height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
}
</style>
