<template>
    <div class="todo">
        <div @click="changeState(item)" class="chos-div">
            <div v-if="item.isCom">✓</div>
        </div>
        <p :style="{color: item.isCom?'#a7a5a5':'#666666', textDecoration: item.isCom? 'line-through': 'none'}">{{
            item.title }}</p>
        <div>
            <button @click="deleteThis(item)" class="destroy"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        item: {
            type: Object,
            require: true
        }
    },
    methods: {
        changeState (item) {
            item.isCom = !item.isCom;
        },
        deleteThis () {
            // console.log('item', item)
            // let index = this.list.indexOf(item);
            // console.log('index', index)
            // this.list.splice(index, 1);
            this.$emit('deleteFun', this.item);
        }
    },
}
</script>

<style scoped lang="scss">
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
