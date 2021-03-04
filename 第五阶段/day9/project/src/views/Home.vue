<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1 @click="fun">调用login/updateName</h1>

        <h2 v-for="(item,index) in list" :key="index">{{ item.title +'--' +item.price}}</h2>

        <!-- <h1>折扣列表</h1>
        <h2 v-for="(item,index) in lowPrice" :key="index+10">{{ item.title +'--' +item.price}}</h2> -->

        <h1>{{ user.name }}---{{ user.phone }}</h1>
        <h1>{{ token }}---{{ loginToken }}</h1>

    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "Home",
    data() {
        return {
        };
    },
    created() {
        console.log('////', this.$store);
    },
    computed: {
        // ...mapState(['name', 'list']),
        ...mapState({
            // 'name': state => state.name,
            'list': state => state.list,
            'token': state => state.token,
            'user': state => state.login.user,
            'loginToken': state => state.login.token
        }),
        ...mapGetters(['lowPrice'])
    },
    methods: {
        ...mapMutations(['updateName']),
        ...mapActions(['action1']),
        // ...mapMutations({
        //     'loginUpdateName': 'login/updateName'
        // }),


        fun() {
            this.loginUpdateName();

            this.action1();
        }
    },
};
</script>
