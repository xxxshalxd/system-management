<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tabs" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>

    </el-breadcrumb>
</template>
<script setup>
import { ref, watch } from "vue"
// 引入路由
import { useRoute } from 'vue-router';
// 获取路由
const route = useRoute()
// 定义一个数组来保存路由数据
const tabs = ref([])
//以上 Vue Router 的 useRoute 钩子来获取当前路由对象。tabs 是一个空数组的响应式引用，用于存储面包屑数据。

// 获取面包屑数据
const getBreadCrumb = () => {
    let matched = route.matched.filter((item) => item.meta && item.meta.title)
    //使用 filter 方法从当前路由的 matched 数组中筛选出具有 meta 属性和 meta.title 的项。
    // 获取第一个元素
    const one = matched[0]

    // 判断是否是首页
    if (one.path != '/dashboard') {
        matched = [{ path: '/dashboard', meta: { title: '首页' } }].concat(matched)
    }
    //检查第一个匹配项是否是首页（路径为 /dashboard）。如果不是，将一个表示首页的对象添加到 matched 数组的开头。
    tabs.value = matched

    //最后，将计算后的 matched 数组赋值给 tabs 响应式引用
}
getBreadCrumb()
//立即调用 getBreadCrumb 函数，以确保在组件加载时生成面包屑数据。

//监听路由变化
watch(
    () => route.path,
    () => getBreadCrumb()
)


</script>

<style lang="scss" scoped>
:deep(.el-breadcrumb__inner) {
    color: #fff !important;

}
</style>