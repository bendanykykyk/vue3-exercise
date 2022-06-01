const EnumModule = {}

const req = (context: any) => context.keys().map(context)

const options = req(require.context('./', true, /\.ts$/)) // 批量导入当前文件所在目录下的.js文件

options.forEach((option: any) => {
  Object.assign(EnumModule, {
    ...option
  })
})

export default EnumModule
