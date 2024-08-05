<template>
    <div class="logo">
        <img :src="MenuLogo" alt="" class="img">
        <!-- 使用了Vue的v-bind指令（简写为:）来绑定src属性，其值为MenuLogo变量 -->
        <span v-if="show" class="title">
            {{ title }}
        </span>
    </div>
</template>

<script setup>
import MenuLogo from "@/assets/logo.jpg"
import { ref, watch } from "vue"

const title = ref("后台数据中心")

// 引入store
import { menuStore } from "@/store/menu/index.js"
// 获取store
const store = menuStore()
// const show = computed(() => {
//     return !store.getCollapse
// })

// 解决展示和关闭的延时
const show = ref(true)
// 用监听属性
watch(
    () => store.getCollapse, (collapse) => {
        if (!collapse) {
            setTimeout(() => {
                show.value = !collapse
            }, 300)
        } else {
            show.value = !collapse
        }
    }
)


</script>


<style lang="scss" scoped>
.logo {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #2b2f3b;
    cursor: pointer;
    /*cursor: pointer;
        : 当鼠标悬停在.logo容器上时，光标会显示为指针形状
   */

    text-align: center;
    align-items: center;


    /*align-items: center;
    : 由于使用了Flexbox布局，这个属性使得容器内的子元素在垂直方向上居中对齐。 */
    /*  
    水平和垂直方向上的居中对齐：使用align-items: center;
        确保容器内的所有子元素在垂直方向上居中对齐，而text-align: center;
        （尽管在Flex布局中通常不需要）确保水平方向上的文本对齐。
    */
    .img {
        width: 50px;
        height: 50px;
        margin-right: 5px;
        margin-left: 5px;
    }

    .title {
        color: #ffffff;
        font-size: 21px;
        font-family: '黑体';
        font-weight: bold;
        line-height: 60px;

    }
}
</style>