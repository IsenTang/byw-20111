<template>
    <div class="about">
        <input type="text" v-model="str">
        <button @click="update">update</button>
        <button @click="update2">update2</button>
        <h1>This is an about page</h1>
        <h2>{{ $store.state.name }}</h2>
        -------------<br>
        <h2>{{ str3 }}</h2>
        -------------<br>
        <h2>{{ str2 }}</h2>
        <h2>{{ str2 }}</h2>
        <h2>{{ str2 }}</h2>
        <h2>{{ str2 }}</h2>
        <h3>{{ $store.getters.lowPrice }}</h3>
        <button @click="fun1">调用actions</button>
    </div>
</template>

<script>
import * as types from '../store/type'
export default {
    name: 'About',
    data () {
        return {
            str: '',
            count: 1,
            str2: this.$store.state.name
        }
    },
    computed: {
        str3 () {
            return this.$store.state.name
        },
        list () {
            return this.$store.state.list
        },
        lowPrice () {
            return this.$store.getters.lowPrice
        }
    },
    created() {
        console.log('types>>>', types)

        console.log('$store', this.$store);
        // this.$store.state.name="update";
    },
    methods: {
        update () {
            this.$store.commit("updateName", this.str);
        },
        update2 () {
            this.$store.commit( {
                type: "updateName2",
                str: this.str
            } )
        },
        fun1 () {
            this.$store.dispatch('action1', this.count)
            this.count++;
        }
    },
}
</script>

<style lang="scss">
    
</style>
