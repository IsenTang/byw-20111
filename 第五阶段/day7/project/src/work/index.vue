<template>
    <div class="work">
        <router-view></router-view>

        <div class="nav">
            <div class="">
                <router-link :style="{color: init=='person'?'red': '#000'}" :to="{name: 'person'}">联系人</router-link>
            </div>
            <div class="">
                <router-link :style="{color: init=='message'?'red': '#000'}" :to="{name: 'message'}">短信</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Work',
    data () {
        return {
            init: 'person'
        }
    },
    methods: {
        
    },
    watch: {
        "$route":{
            handler (newV, oldV) {
                console.log('newV', newV)
                console.log('oldV', oldV)
                this.init = newV.name;
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        // console.log( '---',this.$route );
    },
    
}
</script>

<style lang="scss">
   .nav{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 40px;
        background-color: #ddd;
        display: flex;justify-content: space-between;
        align-items: center;
    }
    .nav > div {
        width: 50%;
        text-align: center;
    }

    .nav > div:first-child {
        border-right: solid 1px #000;
    }
</style>
