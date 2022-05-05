<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "scroller",
        data() {
            return {
                scroller:{
                    type:Object,
                    default() {
                        return {}
                    }
                }
            }
        },
        //接收父组件来的probeType（0，1不侦测实时位置，2在手指滚动过程中被侦测，手指离开后惯性不侦测，3只要滚动，都侦测）
        props:{
            probeType:{
                type:Number,
                default:0
            }
        },
        mounted() {
            // 不可以在created上创建，要在组件渲染完之后，再挂载
            // 将模版根组件挂载到滚动组件上
            // 默认情况下scroller不可以实时监听滚动位置，将获取到的probeType存入data
            this.scroller = new BScroll(this.$refs.wrapper, {
                probeType:this.probeType,
            })
            this.scroller.on('scroll', (postion) => {
                this.$emit('scroll', postion)
            })

        },
        methods:{
            scrollTo(x, y, time=300) {
                this.scroller.scrollTo(0, 0, time)
            },

        }
    }
</script>

<style scoped>

</style>
