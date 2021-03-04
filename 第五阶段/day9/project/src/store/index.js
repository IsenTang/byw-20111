import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import * as types from './type'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, // 严格模式
    // 初始状态
    state: {
        name: 'hello vuex',
        list: [
            { title: "火龙果", price: 100 },
            { title: "榴莲", price: 500 },
            { title: "西瓜", price: 1000 },
            { title: "香瓜", price: 2000 }
        ],
        token: 'vuex-token'
    },
    // 数据处理，状态筛选
    getters: {
        // 过滤低于1000块的水果
        lowPrice (state) {
            return state.list.filter(item => {
                return item.price < 1000
            })
        }
    },
    mutations: {
        updateName(state, value) {
            state.name += value
        },
        updateName2(state, value) {
            state.name += value.str;
        }
        // [types.UPDATENAME](state, value) {
        //     state.name += value
        // },
        // [types.UPDATENAME2](state, value) {
        //     state.name += value.str;
        // }
    },
    actions: {
        action1(store, value) {
            // 异步操作
            store.commit(updateName, value)
            // store.commit([types.UPDATENAME], value)
        },
        action2({ commit }, value) {
            commit(updateName, value)
            // commit([types.UPDATENAME], value)
        }
    },
    modules: {
        login
    }
})