import {defineStore} from "pinia"


// 自定义一个选项卡数据类的对象
// const Tab= {
//     title:"",
//     path:""
// }
// 自定义数组数据类型 
const TabState = {
    tabList:[]
}

// 定义一个选项卡store
export const tabStore = defineStore("tabStore",{
    state:()=>{  //定义
        return {
            tabList:[],

        }
    },
    getters:{  //获取
        getTab(state){
            return state.tabList
        }
    },


actions:{  //操作
    addTab(tab){
        // 判断当前tabList中是否存在选项卡里面
        if(this.tabList.some(item=>item.path === tab.path)){
            return
            // 如果 tabList 中已存在相同路径的 tab，则不执行任何操作
        }
        this.tabList.push(tab)
    }
}

}
)