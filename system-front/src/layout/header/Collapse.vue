<template>
    <el-icon color="#fff" size="32px" style="cursor: pointer;" @click="setCollapse">
        <component :is="status ? Fold : Expand"></component>
    </el-icon>
</template>

<script setup>
// 引入图标
import { Fold, Expand } from '@element-plus/icons-vue/global'

// 引入store获取收缩菜单状态
import { menuStore } from "@/store/menu/index.js"
import { computed } from 'vue'
// 获取store
const store = menuStore()

// 获取store状态
const status = computed(() => {
    return !store.getCollapse
})
//点击切换
const setCollapse = () => {
    store.setCollapse(!store.getCollapse)
}


</script>

<style lang="scss" scoped></style>