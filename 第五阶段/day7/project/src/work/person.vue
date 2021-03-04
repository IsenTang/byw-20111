<template>
    <div class="person">
        <div class="top-input">
            <div class="input-model">
                <input type="text" v-model="name" class="input1" placeholder="姓名">
                <input type="text" v-model="phone" class="input2" placeholder="手机号">
                <span class="sex-box">
                    <span :style="{border: sex=='男'? 'solid 2px #fff': 'none'}" class="span1" @click="changeSex('男')"></span>
                    <span :style="{border: sex=='女'? 'solid 2px #fff': 'none'}" class="span2" @click="changeSex('女')"></span>
                </span>
            </div>
            <button @click="addPerson">添加</button>
        </div>
        <div>
            <div class="all-count">45 位练习人</div>
        </div>
        <div>
            <div v-for="(item, index) in list" :key="index" class="item-person">
                <div class="per-info">
                    <img v-if="item.sex=='男'" src="../assets/man.jpeg" alt="">
                    <img v-else src="../assets/woman.jpeg" alt="">
                    <!-- <img :src="item.sex=='男'? '../assets/man.jpeg':'../assets/woman.jpeg'" alt=""> -->
                    <div class="per-phone">
                        <h2>{{ item.phone }}</h2>
                        <h1>{{ item.nickname }}</h1>
                    </div>
                </div>
                <!-- <p>08-13 12:46:78</p> -->
                <p>{{ showTime(item.time) }}</p>
                <button @click="deletePerosn(index)" class="remove">X</button>
            </div>  
        </div>
    </div>
</template>

<script>
import Moment from 'moment'

export default {
    name: 'Person',
    data () {
        return {
            list: [],
            name: '',
            phone: '',
            sex: '男'
        }
    },
    methods: {
        // 修改性别
        changeSex (sex) {
            this.sex = sex;
        },
        // 增加联系人
        addPerson () {
            this.list.push({
                nickname: this.name,
                phone: this.phone,
                sex: this.sex,
                time: new Date()
            })
            this.name = '';
            this.phone = '';
            this.sex = '男';
        },
        showTime (time) {
            return Moment(time).format('MM-DD hh:mm:ss')
        },
        // 删除联系人
        deletePerosn (index) {
            this.list.splice(index, 1);
        }
        
    },
    
}
</script>

<style lang="scss">
   .top-input{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f97197;
        padding: 0 10px;
    }
    .input-model{
        font-size: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .top-input .input1{
        width: 64px;
        height: 30px;
        padding: 0 4px;
        border: none;
        outline: none;
        border-radius: 2px;
        font-size: 14px;
    }
    .top-input .input2{
        width: 120px;
        height: 30px;
        border: none;
        outline: none;
        padding: 0 3px;
        border-radius: 2px;
        margin-left: 6px;
        font-size: 14px;
    }
    .top-input button{
        width: 60px;
        height: 30px;
        line-height: 14px;
        font-size: 14px;
        border: none;
        background: #fff;
        color: #ee7096;
        font-weight: 400;
        border-radius: 4px;
    }
    .all-count{
        width: 100%;
        height: 30px;
        background-color: #f3f3f3;
        line-height: 30px;
        font-size: 14px;
        color: #666;
        padding: 0 10px;
    }
    .item-person{
        position: relative;
        padding-right: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 60px 10px 10px;
        border-bottom: solid 1px #e2e2e2;
    }
    .item-person p{
        font-size: 13px;
        color: #999;
    }
    .per-info{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .per-info img{
        width: 44px;
        height: 44px;
    }
    .per-info h1{
        font-size: 14px;
        color: #666;
        font-weight: 400;
        margin: 0;
    }
    .per-info h2{
        font-size: 16px;
        color: #1c1c1c;
        font-weight: bold;
        margin: 0;
    }
    .per-phone{
        padding-left: 10px;
    }
    .remove{
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0, -50%);
        border: none;
        background: none;
        color: #9e9c9c;
        font-size: 16px;
        line-height: 16px;
        outline: none;
    }
    .sex-box{
        display: inline-block;
        height: 30px;
        width: 30px;
        background: #fff;
        margin-left: 6px;
        border-radius: 2px;
        font-size: 0;
    }
    .span1{
        display: block;
        width: 100%;
        height: 50%;
        font-size: 12px;
        background-color: blue;
        // border: solid 1px #fff;
        text-align: center;
        line-height: 15px;
    }
    .span2{
        display: block;
        width: 100%;
        height: 50%;
        font-size: 12px;
        background-color:#f8b8cd;
    }
</style>
