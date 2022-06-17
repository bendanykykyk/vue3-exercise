import { reactive, toRefs } from 'vue'

export const useCountDown = (number = 60) => {
  const initBtn = {
    isSend: false,
    currentNumber: number
  }
  const copyBtn = reactive({ ...initBtn })
  const { isSend } = toRefs(copyBtn)
  const { currentNumber } = toRefs(copyBtn)

  const countDown = () => {
    const timer = setInterval(() => {
      currentNumber.value--
    }, 1000)
    if (currentNumber.value <= 0) {
      clearInterval(timer)
      // 设置回初值
      isSend.value = initBtn.isSend
      currentNumber.value = initBtn.currentNumber
    }
  }

  return {
    currentNumber,
    countDown,
    isSend
  }
}
