<template>

   <template v-for="menu in props.menuListData" :key="menu.path">
      <!-- -for指令，用于遍历props.menuListData数组中的每个menu对象，并为每个对象渲染一个模板。 -->

      <!-- 有子菜单 -->
      <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
         <!-- v-if指令，用于判断当前菜单对象是否有子菜单（children属性），如果有，则渲染子菜单组件。 -->
         <template #title>
            <el-icon>
               <component :is="menu.meta.icon"></component>
            </el-icon>
            <span>{{ menu.meta.title }}</span>
         </template>
         <!-- 循环递归调用 -->
         <MenuItem :menuListData="menu.children">
         <!-- 递归调用当前组件自身，用于渲染子菜单的子菜单项。 -->
         </MenuItem>
      </el-sub-menu>

      <!-- 没有子菜单 -->

      <el-menu-item v-else :index="menu.path">
         <!-- v-else指令，与v-if配合使用，如果没有子菜单，则渲染一个普通菜单项。 -->
         <el-icon>
            <component :is="menu.meta.icon"></component>
         </el-icon>
         <template #title>{{ menu.meta.title }}</template>
      </el-menu-item>
   </template>

</template>

<script setup>
import { reactive } from 'vue';

// 接受父组件的数据

const props = defineProps({
   menuListData: {
      type: Array,
      required: true
   }
})


</script>

<style lang="scss" scoped></style>