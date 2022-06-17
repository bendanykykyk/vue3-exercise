<script>
// 用于自定义jsx容器，可适用的范围很广
export default {
  name: 'Container',
  components: {},
  props: {
    renderContainer: {
      type: Function,
      default: () => {}
    },
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  render(h) {
    return this.renderContainer(h, this.data)
  }
}
</script>
<style lang="scss" scoped></style>
