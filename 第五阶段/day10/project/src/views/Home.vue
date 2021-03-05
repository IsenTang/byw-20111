<template>
    <div class="home">
        <div>
            <h1>个人信息</h1>
            <img :src="myUserInfo.avatar" alt="">
            <h3>{{ myUserInfo.nickname }}</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    data () {
        return {
            myUserInfo: {},
            list: []
        }
    },
    created() {
        // this.axios1();
        // this.axios2();
    },
    methods: {
        axios1 () {
            axios.get('https://www.banyuan.club/api/offlineSchedule/listCourseSchedule', {
                params: {
                    courseId: 2
                }
            })
            .then(res=> {
                console.log('res>>>>', res)
            })
            .catch(err=> {
                console.log('err>>>>', err);
            })
        },
        axios2 () {
            axios({
                method: 'post',
                url: 'http://49.235.98.65:3000/user/login',
                data: {
                    username: 'password',
                    password: 'password'
                }
            }).then( res => {
                console.log('login res==>', res.data.user);
                this.myUserInfo = res.data.user;
            }).catch( error => {
                console.log('login error==>', error);
            })
        }
        
    },
}
</script>
