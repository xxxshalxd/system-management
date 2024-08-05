import {defineStore} from "pinia"

// 定义一个全局的store
export const menuStore = defineStore("menuStore",{
    state:()=>{  //定义
        return {
            collapse:false,

        }
    },
    getters:{  //获取
        getCollapse(state){
            return state.collapse
        }
    },


actions:{  //操作
    setCollapse(collapse){
        this.collapse=collapse
    }
}

}
)