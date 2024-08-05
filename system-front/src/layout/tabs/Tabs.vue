<template>
    <el-tabs v-model="activeTab" type="card" class="demo-tabs" closable @tab-remove="removeTab">
        <el-tab-pane v-for="item in tabsList" :key="item.path" :label="item.title" :name="item.path"
            @tab-click="clickBtn">

        </el-tab-pane>
    </el-tabs>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'
// 引入store
import { tabStore } from '@/store/tabs/index.js';

// 引入路由
import { useRoute, useRouter } from 'vue-router';
// 获取路由
const route = useRoute()  //获取路由信息的
const router = useRouter()   //操作路由，例如跳转
// 选中的选项卡的数据
const activeTab = ref('')

// 获取store
const store = tabStore()


// 点击事件
const clickBtn = (pane) => {
    console.log("pane===>" + pane)
    const { props } = pane
    router.push({ path: props.name })
}

// 获取选项卡数据
const tabsList = computed(() => {
    return store.getTab
})
// 用到computed是因为 computed时，Vue 会自动追踪 computed 属性依赖的响应式状态，并在这些状态变化时重新计算 computed属性的值。
// 也就是tabsList 会自动更新


// 添加选项卡
const addTab = () => {
    const { path, meta } = route
    //     ES6 中的解构赋值,提取多个属性的操作更加简洁和易于阅读
    console.log("path==>" + path)
    console.log("meta==>" + meta)
    const tab = {
        path: path,
        title: meta.title
    }
    //往store中添加
    store.addTab(tab)
}

// 删除选项卡
const removeTab = (targetName) => {
    const tabs = tabsList.value
    let activeName = activeTab.value
    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
            if (tab.path === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.path
                }
            }
        })
    }
    // 重新设置
    activeTab.value = activeName
    //    重新设置选项卡数据
    store.tabList = tabs.filter((tab) => tab.path !== targetName)
    //跳转路由
    router.push({ path: activeName })
}

// 监听当前路由
watch(

    () => route.path,
    () => {
        setActiveTab(),
            addTab()
    }
)

//获取path激活选项卡
const setActiveTab = () => {
    activeTab.value = route.path
}

// 钩子函数
onMounted(() => {
    setActiveTab()
    addTab()
})


</script>

<style lang="scss" scoped>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>