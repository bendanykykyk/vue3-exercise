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
          />
          <!-- 
            
            @change="(value) => onChange(item.key, value)" -->
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
<script lang="ts">
import FormInput from '@/components/Common/TSimpleForm/FormInput/index.vue'
import { PropType, defineComponent, onMounted, ref, reactive, toRef, getCurrentInstance } from 'vue'
interface IFormItem {
  type: string
  label: string
  props: any
  key: string
  disabled?: any
  display?: any
  events?: any
  rules?: any
}
export default defineComponent({
  name: 'TSimpleForm',
  components: {
    FormInput
  },
  props: {
    formData: {
      type: Object,
      default: () => {}
    },
    fieldList: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    operatorList: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['update:formData'],
  setup(props, context) {
    const compChildName = (item: IFormItem) => {
      const name = {
        // 后续增加
        input: 'FormInput'
      }[item.type]
      return name
    }

    const isShow = (item: IFormItem) => {
      if (typeof item.display === 'boolean') {
        return item.display
      } else if (typeof item.display === 'function') {
        return item.display()
      } else {
        return true
      }
    }

    // const onChange = (key: string, value: any) => {
    //   context.emit('update:formData')
    //   // this.$set(this.formData, key, value)
    //   // this.$forceUpdate()
    // }

    const onInput = (key: string, value: any) => {
      // console.log(key, value)

      // const formData = props.formData
      // console.log(formData)
      // formData[key] = value
      context.emit('update:formData', { ...props.formData, [key]: value })
      debugger
      // context.emit('update:formData', formData)
    }
    return {
      compChildName,
      isShow,
      // onChange,
      onInput
    }
  }

  // methods: {
  //   // 校验
  //   validate() {
  //     console.log('触发校验')
  //     return new Promise((resolve, reject) => {
  //       this.$refs.form.validate((valid) => {
  //         if (valid) {
  //           resolve({
  //             valid,
  //             formData: this.formData
  //           })
  //         } else {
  //           reject({
  //             valid,
  //             formData: null
  //           })
  //         }
  //       })
  //     })
  //   }
  // }
})
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
