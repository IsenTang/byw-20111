<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld/> -->

    <el-button type="primary" @click="isShow = true">新增</el-button>

    <el-table :data="list" style="width: 100%" max-height="250">
      <el-table-column prop="id" label="ID" width="150"> </el-table-column>

      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>

      <el-table-column prop="phone" label="手机号" width="120">
      </el-table-column>

      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>

      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.row, scope.$index)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-dialog title="新增联系人" :visible.sync="isShow">
      
      <el-form :model="form">

        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      list: [
          {id: 1, name: '小红', phone: '123', address: '紫东B9'},
          {id: 2, name: '小红2', phone: '456', address: '紫东B8'},
          {id: 3, name: '小红3', phone: '789', address: '紫东B7'}
      ],
      isShow: false,
      form: {
          id: null,
          name: '',
          phone: '',
          address: ''
      },
      formLabelWidth: '120px'
    };
  },
    methods: {
        add () {
            console.log('add', this.form);

            // 讲对话框内的值深拷贝追加进list
            this.list.push( JSON.parse(JSON.stringify(this.form)) );

            this.isShow = false; // 隐藏对话框

            // 清空对话框内的值
            this.form = {
                id: null,
                name: '',
                phone: '',
                address: ''
            }
        },
        deleteRow(row, index) {
            console.log('---->>', row, index);
            this.list.splice(index, 1);
        }
    },
};
</script>
