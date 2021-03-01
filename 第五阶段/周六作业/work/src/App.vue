<template>
    <div class="home">

        <div class="page-top">
            <div class="page-content">
                <h2>任务列表</h2>
            </div>
        </div>

        <div class="main">
            <div class="add-task">
                <h3 class="big-title">添加任务：</h3>
                <input placeholder="输入任务名称，点回车即可添加任务" class="task-input" type="text" v-model="todo" @keyup.enter="enterFun" />
            </div>

            <div class="task-main">

                <ul class="task-nav">
                    <li v-for="obj in nav" :key="obj.title"
                    :class="isClick==obj.flag?'chosStyle':'notChosStyle'" @click="changeNav(obj.flag)">
                        {{ obj.title }}
                        <span>（{{ getLength(obj.flag) }}）</span>
                    </li>
                    <!-- <li class="notChosStyle">已完成任务<span>（2）</span></li>
                    <li class="notChosStyle">全部任务<span>（6）</span></li> -->
                </ul>

                <div class="task-list">
                    <div class="tasks">

                        <span v-if="showList.length==0" class="no-task-tip">还没有当前任务哦！！</span>
                        

                        <!-- 任务 -->
                        <div v-for="(item, index) in showList" :key="index" class="todo">
                            <div @click="changeState(item)" class="chos-div">
                                <div v-if="item.isCom">✓</div>
                            </div>
                            <p :style="{color: item.isCom?'#a7a5a5':'#666666', textDecoration: item.isCom? 'line-through': 'none'}">{{
                                item.title }}</p>
                            <div>
                                <button @click="deleteThis(item)" class="destroy"></button>
                            </div>
                        </div>


                        <!-- <div class="todo">
                            <div class="chos-div">
                                <div>✓</div>
                            </div>
                            <p style="color:#666666;">未完成任务</p>
                            <div>
                                <button class="destroy"></button>
                            </div>
                        </div> -->

                    </div>
                </div>
            </div>

        </div>
    
    </div>
</template>

<script>

var store = {
    get (name) {
        return JSON.parse( localStorage.getItem(name) )
    },
    set (name, list) {
        return localStorage.setItem(name, JSON.stringify(list))
    }
}

export default {
    name: 'App',
    components: {

    },
    data () {
        return {
            todo: '',
            isClick: 'not',   // is   all
            nav: [
                { title: '未完成任务', flag: 'not'},
                { title: '已完成任务', flag: 'is'},
                { title: '全部任务', flag: 'all'}
            ],
            list: store.get('todoList')
        }
    },
    computed: {
        showList () {
            let arr = [];
            switch (this.isClick) {
                case 'not':
                    arr = this.list.filter(item=>{ return !item.isCom })
                    break;
                case 'is':
                    arr = this.list.filter(item=>{ return item.isCom })
                    break;
                case 'all':
                    arr = this.list
                    break;
            }
            return arr
        }
    },
    watch: {
        list: {
            handler (newV, oldV) {
                store.set('todoList', this.list);
            },
            deep: true
        }
    },
    methods: {
        enterFun () {
            console.log('>>>', this.todo)
            this.list.unshift({
                title: this.todo,
                isCom: false
            })
            this.todo = '';
        },
        changeNav (flag) {
            console.log('当前点击项>>>>', flag);
            this.isClick = flag;
        },
        getLength (flag) {
            console.log('当前项>>>>', flag);
            let arr = [];
            switch (flag) {
                case 'not':
                    arr = this.list.filter(item=>{ return !item.isCom })
                    break;
                case 'is':
                    arr = this.list.filter(item=>{ return item.isCom })
                    break;
                case 'all':
                    arr = this.list
                    break;
            }
            return arr.length
        },
        changeState (item) {
            item.isCom = !item.isCom;
        },
        deleteThis(item) {
            console.log('item', item)
            let index = this.list.indexOf(item);
            console.log('index', index)
            this.list.splice(index, 1);
        }
    },
}
</script>

<style lang="scss">
body {
        margin: 0;
        background-color: #fafafa;
        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .home {
        width: 80%;
        height: 620px;
        margin: 30px auto 0;
        border-radius: 10px;
        box-shadow: 0 0 10px #c1c1c1;
        overflow: hidden;


        .page-top {
            width: 100%;
            height: 40px;
            background-color: #3f9cdb;

            .page-content {
                width: 50%;
                margin: 0 auto;

                h2 {
                    margin: 0;
                    line-height: 40px;
                    font-size: 18px;
                    color: #fff;
                }
            }
        }

        .main {
            width: 90%;
            margin: 0 auto;
            box-sizing: border-box;

            .add-task {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                align-items: center;
                padding: 40px 0;
            }

            .big-title {
                min-width: 100px;
                color: #222;
            }

            .task-input {
                width: 99%;
                height: 30px;
                outline: 0;
                padding: 0 10px;
                border: 1px solid #ccc;
            }

            .task-main {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;

                .task-nav {
                    padding: 0;
                    margin: 0;
                    list-style: none;

                    li {
                        width: 150px;
                        margin: 0 0 30px 0;
                        border-radius: 3px;
                        height: 40px;
                        line-height: 40px;
                        font-weight: bold;
                        font-size: 14px;
                        cursor: pointer;

                        span {
                            font-size: 12px;
                        }
                    }

                    .chosStyle {
                        color: #ffffff;
                        background-color: #3f9cdb;
                    }

                    .notChosStyle {
                        color: #3f9cdb;
                        background-color: #ffffff;
                    }
                }

                .task-list {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    background: #f3f3f3;
                    padding: 10px;
                    border-radius: 10px;
                    margin-left: 20px;
                    height: 400px;
                    overflow-y: scroll;

                    li {
                        position: relative;
                        font-size: 16px;
                        border-bottom: 1px solid #ededed;

                        &:hover {
                            background-color: orange;
                        }
                    }

                    .tasks {
                        width: 100%;
                        height: 400px;
                        background-color: #fff;
                        overflow-y: scroll;
                    }
                }

                .no-task-tip {
                    padding: 100px 0 10px 10px;
                    display: block;
                    // border-bottom: 1px solid #ededed;
                    color: #777;
                }

            }
        }

    }


    .todo {
        background-color: #ffffff;
        position: relative;
        font-size: 16px;
        border-bottom: 1px solid #ededed;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;

        &:hover {
            background-color: #fafafa;
            & .destroy {
                display: block;
            }
        }

        .chos-div {
            width: 16px;
            height: 16px;
            border: solid 1px #83bfe8;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;

            div {
                font-size: 10px;
                color: #296994;

            }
        }

        p {
            font-size: 14px;
            font-weight: 500;
            max-width: 80%;
        }

        button {
            margin: 0;
            padding: 0;
            border: 0;
            background: 0;
            font-size: 100%;
            vertical-align: baseline;
            font-family: inherit;
            font-weight: inherit;
            color: inherit;
            outline: 0
        }

        .destroy {
            display: none;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            right: 10px;
            width: 40px;
            height: 40px;
            margin: auto 0;
            font-size: 30px;
            color: #cc9a9a;
            margin-bottom: 11px;
            transition: color .2s ease-out;

            &:hover {
                color: #af5b5e;
            }

            &:after {
                content: '×';
            }
        }
    }
</style>
