<template>

    <el-container class="layout">
        <el-aside width="auto" class="aside">

            <MenuBar></MenuBar>

        </el-aside>
        <el-container>
            <el-header class="header">
                <Header></Header>
            </el-header>
            <el-main class="main">
                <Tabs></Tabs>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script setup>

import MenuBar from "./menu/MenuBar.vue"
// 引入header.vue组件
import Header from './header/Header.vue';
// 引入tabs.vue组件
import Tabs from './tabs/Tabs.vue'
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;

    .aside {
        background-color: #304156;
    }

    .header {
        background-color: #009688;
        display: flex;
        align-items: center;

    }

    .main {
        background-color: rgb(220, 225, 220);
    }
}
</style>