// import { config } from '@/config'
import { ref, onBeforeUnmount, onMounted } from 'vue'

export const useScrollPosition = () => {
  const scrollTop = ref(0)

  const handleScroll = (e: any) => {
    scrollTop.value = e.target.documentElement.scrollTop || e.target.body.scrollTop
  }

  const scrollTo = (top = 0, left = 0, behavior = 'smooth') => {
    window.scrollTo({
      top,
      left,
      behavior: 'smooth'
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, true)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  return {
    // 滚动的位置
    scrollTop,
    // 滚动到某个位置
    scrollTo
  }
}
