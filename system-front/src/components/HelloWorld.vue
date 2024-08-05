<script setup>
import { ref } from 'vue'
import { testStore } from "@/store/test"
import {storeToRefs} from "pinia"
const store =  testStore()
const add = ()=>{
    // store.setCount(++store.count)
    store.count++
}
const {count} = storeToRefs(store)
</script>

<template>
<h1>hello world</h1>
 <hr>
<h1>{{count}}</h1>
<el-button @click="add" type="primary">累加</el-button>
</template>

<style scoped>

</style>
