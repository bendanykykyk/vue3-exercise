// 暂时废弃
export const vCssVarToCamel = (name: string) => {
  // --van-cell-active-color   =>  cellActiveColor
  const fragmentName = name.slice(6).split('-')
  const [firstWord, ...restWords] = fragmentName
  const upperFirstLetterRestWords = restWords.map((item) => {
    return item.charAt(0).toLocaleUpperCase() + item.slice(1)
  })
  return [firstWord, ...upperFirstLetterRestWords].join('')
}
