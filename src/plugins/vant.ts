import { App as VM } from 'vue'
import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Tabbar,
  TabbarItem,
  Image as VanImage,
  Swipe,
  SwipeItem,
  ConfigProvider,
  Tag,
  List,
  PullRefresh,
  Col,
  Row,
  Field,
  Form,
  Checkbox,
  CheckboxGroup
} from 'vant'

const plugins = [
  Button,
  Icon,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  VanImage,
  Swipe,
  SwipeItem,
  ConfigProvider,
  Tag,
  List,
  PullRefresh,
  Col,
  Row,
  Field,
  Form,
  Checkbox,
  CheckboxGroup
]

export const vantPlugins = {
  install: function(vm: VM) {
    plugins.forEach((item) => {
      vm.component(item.name, item)
    })
  }
}
