<template>
    <div>
        <h1>趣味小课</h1>

        <div class="list-main">
            <div v-for="(item, index) in list" :key="index" @click="jumpPage(item)">
                <img :src="item.pic" alt="">
                <h1>{{ item.title }}</h1>
                <p>{{ item.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'qwxk',
    data ( ) {
        return {
            list: [
                {id: 1, title: '第一个HTML页面', desc: '我们将以一系列任务的方式带你完成一系列web功能的开发，最终你将学会如何在自己的服务器上部署web应用。这里使用一个简单的任务引导我们如何开始', pic: 'http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/html.jpg'},
                {id: 2, title: '构建一个便签页面', desc: '在这个任务中，我们通过构建一个便签页面，来了解CSS的相关内容。我们通过CSS将页面的显示变得更美观。', pic: 'http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/StickyNotes.jpg'},
                {id: 3, title: '记牌小游戏', desc: '我们通过构建一个记牌小游戏，来了解JavaScript相关内容，我们使用JavaScript来增加页面和用户之间的互动。', pic: 'http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/MatchingGame.jpg'},
                {id: 4, title: 'MySQL数据库', desc: '在这里将会带领大家完成群聊系统中用户聊天数据的管理，当完成配套练习，大家还会获得用数据库管理同学通讯录的能力。', pic: 'http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/nodejs.png'}
            ]
        }
    },
    methods: {
        jumpPage (item) {
            this.$router.push({
                name: 'lesson',
                params: item
            })
        }
    },
}
</script>

<style lang="scss">
    .list-main {
        display: flex;
        flex-wrap: wrap;
        & > div {
            width: 400px;
            padding-bottom: 50px;
            img {
                width: 100%;
            }
        }
    }
</style>