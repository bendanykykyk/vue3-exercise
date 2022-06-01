import request from '@/utils/request'

export function uploader(data) {
  return request({
    url: '/files/uploadFiles',
    method: 'post',
    data,
    loading: true
  })
}
