<template>
   <div class="header">

      <Collapse></Collapse>
      <Breadcrumb></Breadcrumb>
   </div>

</template>

<script setup>
// 引入Collapse组件


import Collapse from "./Collapse.vue"
// 引入Breadcrumb组件

import Breadcrumb from "./Breadcrumb.vue"

</script>

<style lang="scss" scoped>
.header {
   display: flex;
   align-items: center;
}

.el-icon {
   margin-right: 5px;
}
</style>