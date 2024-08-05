import {defineStore} from "pinia"
import { computed } from "vue"
export const testStore = defineStore("counter",{
    state:()=>({  //定义容器
        count:0,
    }),
    getters:{
        //计算，或获取数据
        getCount(state){
            return state.count
        }
    },
    actions:{
        // 赋值或者操作容器
        setCount( count){
            this.count=count
        }
    }

})