<template>
    <MenuLogo></MenuLogo>
    <el-menu :default-active="defaultActive" :collapse="isCollapse" @open="handleOpen" @close="handleClose"
        class="el-menu-vertical-demo" unique-opened background-color="#304156" router>
        <MenuItem :menuListData="menuList">
        </MenuItem>

    </el-menu>


</template>

<script setup>
import { computed, reactive, ref } from 'vue';
// 引入MenuLogo组件
import MenuLogo from "./MenuLogo.vue"


// 引入MenuItem组件
import MenuItem from './MenuItem.vue';

// 引入store
import { menuStore } from "@/store/menu/index.js"

// 导入路由
import { useRoute } from 'vue-router';
// 获取路由对象
const route = useRoute()
// 当前激活导航时以index作为path进行跳转，以default-active来设置加载时的激活项 
const defaultActive = computed(
    () => {
        const { path } = route
        // 等同于const path=route.path
        //解构赋值的执行过程如下：
        // 在 route 对象中查找名为 path 的属性。
        // 将 path 属性的值赋给等号左侧的变量 path。

        console.log("path==>" + path)
        return "path"
    }
    // 计算属性将返回当前路由的路径，并且每次路由的路径变化时，计算属性都会重新计算并更新其值。
)




// 定义一个数组，多级目录嵌套路由
// 定义成响应式数组的用处：组件通信：在Vue组件中，数组可以作为prop传递给子组件，数组非常适合用于列表渲染。使用v-for可能需要不同的语法），可以遍历数组并为数组中的每个元素生成一个元素或组件实例

let menuList = reactive(
    [{
        path: "/system",
        name: "system",
        component: "Layout",
        meta: {
            title: "系统管理",
            //  用户、角色、权限
            icon: "Setting",
            roles: ["sys:manage"],

        },
        // children为嵌套路由
        children: [
            {
                // 用户
                path: "/userList",
                name: "userList",
                component: "/system/user/UserList",
                meta: {
                    title: "用户管理",
                    icon: "User",
                    roles: ["sys:user"],
                }
            },
            {
                // 角色
                path: "/roleList",
                name: "roleList",
                component: "/system/role/RoleList",
                meta: {
                    title: "角色管理",
                    icon: "Avatar",
                    roles: ["sys:role"],
                }
            },
            {
                // 权限
                path: "/menuList",
                name: "roleList",
                component: "/system/menu/MenuList",
                meta: {
                    title: "菜单管理",
                    icon: "Menu",
                    roles: ["sys:menu"],
                },
            },
        ]
    },
    {
        path: "/booksRoot",
        name: "booksRoot",
        component: "Layout",
        meta: {
            title: "图书管理",

            icon: "Setting",
            roles: ["sys:booksRoot"],
        },
        children: [
            {

                path: "/category",
                name: "category",
                component: "/booksRoot/category/categoryList",
                meta: {
                    title: "图书分类",
                    icon: "Histogram",
                    roles: ["sys:category"],
                },
            },
            {

                path: "/booksList",
                name: "booksList",
                component: "booksRoot/books/BooksList",
                meta: {
                    title: "图书信息",
                    icon: "Notebook",
                    roles: ["sys:books"],
                }
            },


        ]

    }
    ])

// 定义响应数据
// const isCollapse = ref(true)
// 获取store
const store = menuStore()


const isCollapse = computed(() => {
    return store.getCollapse
})

// 展开
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
// 关闭
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
}


//标题样式

:deep(.el-sub-menu .el-sub-menu__title) {
    color: #f4f4f4 !important;
}

/* 
.el-sub-menu .el-sub-menu__title
.el-sub-menu__title 后代选择器
*/
/*使用了 Vue 3 的 :deep 伪类来确保样式能够穿透组件的样式封装。el-sub-menu .el-sub-menu__title 选择器定位到 el-sub-menu 组件内部的子菜单标题,将文字颜色改变， !important优先级最高
   */


//子标题样式
:deep(.el-sub-menu .el-menu-item) {
    color: #fcf4f4;
}

/*同样使用 :deep 伪类，选择 el-sub-menu 组件内部的 el-menu-item 元素
   */

//菜单的右边框
.el-menu {
    border-right: none;
}

//打开菜单的子菜单的样式
:deep(.el-sub-menu .el-menu-item) {
    background-color: #1f2d3d;
}

//当鼠标移动时的样式
:deep(.el-sub-menu .el-menu-item:hover) {
    background-color: #031835;
}

//点击时的样式
:deep(.el-menu-item.is-active) {
    color: #3679d6;
}
</style>