import { IEntrance } from '@/components/Common/Entrances'
import { IMenuBar } from '../components/MineMenu'

export const entrances: IEntrance[] = [
  {
    name: '待付款',
    url: 'icon-history',
    params: {
      status: 'UNPAID'
    },
    isIcon: true
  },
  {
    name: '待发货',
    url: 'icon-operation',
    params: {
      status: 'UNSHIPPED'
    },
    isIcon: true
  },
  {
    name: '待收货',
    url: 'icon-filter',
    params: {
      status: 'WAIT_FOR_RECEIVING'
    },
    isIcon: true
  },
  {
    name: '已完成',
    url: 'icon-good',
    params: {
      status: 'COMPLETED'
    },
    isIcon: true
  },
  {
    name: '退款/售后',
    url: 'icon-switch',
    params: {
      status: 'REFUND'
    },
    isIcon: true
  }
]

export const menus: IMenuBar[] = [
  {
    name: '自提扫码',
    icon: 'icon-scanning',
    isLink: true
  },
  {
    name: '会员中心',
    icon: 'icon-user',
    isLink: true
  },
  {
    name: '领券中心',
    icon: 'icon-discount',

    isLink: true
  },
  {
    name: '收货地址',
    icon: 'icon-electronics',

    isLink: true
  },
  {
    name: '我的收藏',
    icon: 'icon-save',

    isLink: true
  },
  {
    name: '我的足迹',
    icon: 'icon-history',

    isLink: true
  },
  {
    name: '修改密码',
    icon: 'icon-security',

    isLink: true
  },
  {
    name: '消息盒子',
    icon: 'icon-move',

    isLink: true
  },
  {
    name: '服务条款',
    icon: 'icon-notification',

    isLink: true
  },
  {
    name: '隐私策略',
    icon: 'icon-warning',

    isLink: true
  }
]
