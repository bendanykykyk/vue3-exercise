import { IEntrance } from '@/components/Common/Entrances'

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
