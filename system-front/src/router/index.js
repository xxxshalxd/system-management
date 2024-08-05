

import {  createRouter, createWebHistory } from "vue-router";

// 定义一个数组
const routes = [
    {

        path:"/",
        component:()=>import("@/layout/Index.vue"),
        redirect:"/dashboard",
        children:[
            {
                path:"/dashboard",
                component:()=>import("@/views/dashboard/Index.vue"),
                name:"dashboard",meta:{
                    title:"首页",
                   icon:"HomeFilled" 
                }
            }
        ]
    },

    {
        path: "/system",
        name: "system",
        component: ()=>import("@/layout/Index.vue"),
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
                component: ()=>import("@/views/system/user/UserList.vue"),
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
                component: ()=>import("@/views/system/role/RoleList.vue"),
                meta: {
                    title: "角色管理",
                    icon: "Avatar",
                    roles: ["sys:role"],
                }
            },
            {
                // 权限
                path: "/menuList",
                name: "menuList",
                component: ()=>import("@/views/system/menu/MenuList.vue"),
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
        component: ()=>import("@/layout/Index.vue"),
        meta: {
            title: "图书管理",
            icon: "Setting",
            roles:["sys:booksRoot"],
        },
        children: [
            {

                path: "/category",
                name: "category",
                component: ()=>import("@/views/booksRoot/category/CategoryList.vue"),
                meta: {
                    title: "图书分类",
                    icon: "Histogram",
                    roles: ["sys:category"],
                },
            },
            {

                path: "/booksList",
                name: "booksList",
                component: ()=>import("@/views/booksRoot/books/BooksList.vue"),
                meta: {
                    title: "图书信息",
                    icon: "Notebook",
                    roles: ["sys:books"],
                }
            },


        ]

    }
   

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})