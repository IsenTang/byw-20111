import loginMutations from './loginMutations'
import loginState from './loginState'


let login = {
    namespaced: true, // 封闭命名空间
    state: loginState,
    mutations: loginMutations,
    actions: {

    }
}

export default login