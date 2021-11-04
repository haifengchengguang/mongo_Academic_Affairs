<template>
  <div>
  <el-form
      :model="questionForm"
      ref="dataForm"
      label-position="left"
      label-width="90px"
      style="width: 400px; margin-left:50px;"
  >
    <el-form-item label="学号" prop="sid">
      <el-input  v-model="questionForm.sid" placeholder="请输入学号"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="questionForm.name" placeholder="请输入姓名" />
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model="questionForm.age" placeholder="请输入年龄"/>
    </el-form-item>
    <el-form-item label="姓别">
      <el-radio-group v-model="questionForm.sex" style="margin-right:12px;">
        <el-radio v-for="(radio, index) in subjectList" :key="index" :label="radio">{{radio}}</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="出生日期" prop="birthday">
      <!--          <el-input v-model="questionForm.otherAnswer2" />-->
      <el-date-picker type="date" v-model="questionForm.birthday"></el-date-picker>
    </el-form-item>
    <el-form-item label="学院" prop="dname">
      <el-select v-model="questionForm.dname" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="年级" prop="class">
      <el-select v-model="questionForm.class" placeholder="请选择">
        <el-option
            v-for="item in tabMapOptions"
            :key="item.key"
            :label="item.label"
            :value="item.key">
        </el-option>
      </el-select>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取消</el-button>
    <el-button type="primary" @click=" createData() ">确定</el-button>
  </div>
  </div>
</template>

<script>
export default {
name: "Edit",
  data(){
    return{
      tabMapOptions: [
        { label: "2009", key: "2009" },
        { label: "2010", key: "2010" },
        { label: "2011", key: "2011" },
        { label: "2012", key: "2012" },
        { label: "2013", key: "2013" },
        { label: "2014", key: "2014" },
        { label: "2015", key: "2015" },
        { label: "2016", key: "2016" },
        { label: "2017", key: "2017" },
        { label: "2018", key: "2018" },
        { label: "2019", key: "2019" },
        { label: "2020", key: "2020" },
        { label: "2021", key: "2021" },

      ],
      subjectList: ["男", "女"],
      questionForm: {
        sid: "",
        name: "",
        age: "",
        birthday:'',
        userGrades:"",
        sex: "",
        dname:''
      },
      options: [{
        value: 'SC',
        label: 'SC'
      }, {
        value: 'CS',
        label: 'CS'
      }, {
        value: 'physics',
        label: 'physics'
      }, {
        value: 'EE',
        label: 'EE'
      }, {
        value: 'history',
        label: 'history'
      }],
    }
  }
}
</script>

<style scoped>

</style>
