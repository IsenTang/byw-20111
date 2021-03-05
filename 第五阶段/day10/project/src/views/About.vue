<template>
  <div class="about">
    <img :src="userInfo&&userInfo.avatar" alt="">
    <h1>{{ userInfo&&userInfo.nickname }}</h1>
    <button @click="getFun">get</button>
    <button @click="postFun">post</button>
  </div>
</template>

<script>
import { Message } from 'element-ui';
// import { get, post } from "../utils/fetch"
export default {
    name: 'About',
    data () {
        return {
            userInfo: {}
        }
    },
    created() {
        // this.getUserInfo()
        // this.login();
    },
    methods: {
        // async login () {
        //     let params = {
        //         username: 'jwjk11',
        //         password: 'abcabc'
        //     }
        //     const data = await this.yPost('/user/login', params)
        //     console.log('login data', data);
        //     },
        //     async getUserInfo () {
        //     const data = await this.yGet('/user/userinfo', {
        //         params: {
        //             id: '5f69cd1b0023164a8b9f3ee3'
        //         }
        //     })
        //     console.log('about data', data);
        //     if(data) {
        //         this.aboutUserInfo = data;
        //     }
        // },
        async getFun () {
            const data = await this.yGet('admin/shopList')
            if(data) {
                console.log('list>>>', data);
            }
        },
        async postFun () {
            const data = await this.yPost('user/login', {
                username: 'newperson',
                password: 'newperson'
            })
            if(data) {
                console.log('登录成功>>>>', data);
                localStorage.setItem('userid', data.user._id);
            }
        }
    },
}
</script>