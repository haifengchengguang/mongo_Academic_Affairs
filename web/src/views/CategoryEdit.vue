<template>
  <div class="tab-container">
    <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
    >添加学生</el-button>
    <el-dialog :visible.sync="dialogFormVisible">
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
    </el-dialog>
    <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate1"
    >添加老师</el-button>
    <el-dialog :visible.sync="dialogFormVisible1">
      <el-form
          :model="questionForm1"
          ref="dataForm"
          label-position="left"
          label-width="90px"
          style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="教师编号" prop="tid">
          <el-input v-model="questionForm1.tid" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="questionForm1.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="questionForm1.age" placeholder="请输入年龄"/>
        </el-form-item>
        <el-form-item label="姓别">
          <el-radio-group v-model="questionForm1.sex" style="margin-right:12px;">
            <el-radio v-for="(radio, index) in subjectList1" :key="index" :label="radio">{{radio}}</el-radio>
          </el-radio-group>
        </el-form-item>


        <el-form-item label="学院" prop="dname">
          <el-select v-model="questionForm1.dname" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取消</el-button>
        <el-button type="primary" @click=" createData1() ">确定</el-button>
      </div>
    </el-dialog>
    <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate2"
    >添加课程</el-button>
    <el-dialog :visible.sync="dialogFormVisible2">
      <el-form
          :model="questionForm2"
          ref="dataForm"
          label-position="left"
          label-width="90px"
          style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="课程编号" prop="cid">
          <el-input v-model="questionForm2.cid" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="questionForm2.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="前序课程" prop="fcid">
          <el-input v-model="questionForm2.fcid" placeholder="请输入年龄"/>
        </el-form-item>
        <el-form-item label="学分" prop="credit">
          <el-input v-model="questionForm2.credit" placeholder="请输入年龄"/>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取消</el-button>
        <el-button type="primary" @click=" createData2() ">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

export default {
  data() {
    return {
      subjectList: ["男", "女"],
      subjectList1: ["M", "F"],
      input: "",
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

      questionForm: {
        sid: "",
        name: "",
        age: "",
        birthday:'',
        userGrades:"",
        sex: "",
        dname:''
      },
      questionForm1: {
        tid: "",
        name: "",
        age: "",
        sex: "",
        dname:''
      },
      questionForm2: {
        cid: "",
        name: "",
        fcid:"",
        credit:""
      },
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
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
  },
  methods: {
    format1(time, format) {
      var t = new Date(time);
      var tf = function (i) { return (i < 10 ? '0' : '') + i };
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
          case 'yyyy':
            return tf(t.getFullYear());

          case 'MM':
            return tf(t.getMonth() + 1);

          case 'mm':
            return tf(t.getMinutes());

          case 'dd':
            return tf(t.getDate());

          case 'HH':
            return tf(t.getHours());

          case 'ss':
            return tf(t.getSeconds());

        }
      })
    },
    handleCreate() {
      this.questionForm = {
        tid: "",
        correctAnswer: "",
        otherAnswer1: "",
        otherAnswer2: "",
        otherAnswer3: "",
        userGrades: [],
        questionCategory: "",
      };
      this.dialogFormVisible = true;
    },
    handleCreate1() {
      this.questionForm1 = {
        sid: "",
        correctAnswer: "",
        otherAnswer1: "",
        otherAnswer2: "",
        otherAnswer3: "",
        userGrades: [],
        questionCategory: "",
      };
      this.dialogFormVisible1 = true;
    },
    handleCreate2() {
      this.questionForm2 = {
        sid: "",
        correctAnswer: "",
        otherAnswer1: "",
        otherAnswer2: "",
        otherAnswer3: "",
        userGrades: [],
        questionCategory: "",
      };
      this.dialogFormVisible2 = true;
    },
    //添加增加题目
    async createData() {
      const date1=this.questionForm.birthday
      const date=this.format1(date1,'yyyy-MM-dd')
      this.questionForm.birthday=date
      await this.$http.post('student',this.questionForm)
      this.$router.push('/categories/list')
      this.$message({
        type:'success',
        message:'保存成功'
      })
      // const params = this.questionForm;
      // alert(JSON.stringify(params))

      //如果需要调用接口，请打开注释
      //   const res = await saveSubject(params);
      //   console.log(res);
      //   if (res.code === "0000") {
      //     this.$message({
      //       type: "info",
      //       message: "保存成功",
      //     });
      //     this.dialogFormVisible = false;
      //     this.getQuerySubjectList();
      //     return;
      //   }
      //   this.$message({
      //     type: "error",
      //     message: "保存失败",
      //   });
    },
    async createData1() {
      await this.$http.post('teacher', this.questionForm1)
      this.$router.push('/categories/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async createData2() {
      await this.$http.post('course', this.questionForm2)
      this.$router.push('/categories/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    }
  },
};
</script>
<style scoped>
</style>
