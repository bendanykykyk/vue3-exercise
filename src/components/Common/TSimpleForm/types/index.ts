interface IRules {
  required?: boolean
  message: string
  pattern: any
  validator: any
}
export interface IFormItem {
  type: string
  label: string
  props: any
  key: string
  rules?: IRules[]
  events?: any
  disabled?: any
  display?: any
  configProvider?: any
  style?: any
  slotName?: string
}

// interface IForm {}
