<template>
  <div>
    <h1>实验二简单查询</h1>
    <h3>找出年龄小于20岁的所有学生</h3>
    <el-table :data="ageless20">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="birthday" label="生日" width="120">
      </el-table-column>
      <el-table-column prop="class" label="班级" width="120">
      </el-table-column>
      <el-table-column prop="dname" label="学院" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
      </el-table-column>
      <el-table-column prop="sid" label="学号" width="120">
      </el-table-column>
    </el-table>
    <h3>找出年龄小于20岁且是软件学院的学生</h3>
    <el-table :data="agedname">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="birthday" label="生日" width="120">
      </el-table-column>
      <el-table-column prop="class" label="班级" width="120">
      </el-table-column>
      <el-table-column prop="dname" label="学院" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
      </el-table-column>
      <el-table-column prop="sid" label="学号" width="120">
      </el-table-column>
    </el-table>
    <h3>#找出学生关系中的所有学生</h3>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="birthday" label="生日" width="120">
      </el-table-column>
      <el-table-column prop="class" label="班级" width="120">
      </el-table-column>
      <el-table-column prop="dname" label="学院" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
      </el-table-column>
      <el-table-column prop="sid" label="学号" width="120">
      </el-table-column>
      <el-table-column

          label="操作"
          width="100">
        <template slot-scope="scope">
          <!--        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <el-button type="text" size="small" @click=openstudent(scope.row)>编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column

          label="选课"
          width="100">
        <template slot-scope="scope">
          <!--        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <el-button type="text" size="small" @click="$router.push(`/categories/edit/${scope.row._id}`)">选课</el-button>


        </template>
      </el-table-column>

    </el-table>
    <h3>求所有学生的姓名、年龄</h3>
    <el-table :data="items">
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
    </el-table>
    <h3>找出年龄小于20岁的学生的姓名、性别</h3>
    <el-table :data="ageless20">
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
      </el-table-column>
    </el-table>
    <h3>#检索所有课程情况</h3>
    <el-table :data="course">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="cid" label="课程号" width="120">
      </el-table-column>
      <el-table-column prop="fcid" label="先行课" width="120">
      </el-table-column>
      <el-table-column prop="credit" label="学分" width="120">
      </el-table-column>
      <el-table-column

          label="操作"
          width="100">
        <template slot-scope="scope">
          <!--        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <el-button type="text" size="small" @click=openCourse(scope.row)>编辑</el-button>
        </template>
      </el-table-column>

    </el-table>
    <h3>检索先行课号为“300001”的课程名</h3>
    <el-table :data="coursefcid">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="cid" label="课程号" width="120">
      </el-table-column>
      <el-table-column prop="fcid" label="先行课" width="120">
      </el-table-column>
      <el-table-column prop="credit" label="学分" width="120">
      </el-table-column>
    </el-table>
    <h3>#找出所有老师</h3>
    <el-table :data="teacher">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="dname" label="学院" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
      </el-table-column>
      <el-table-column prop="tid" label="学号" width="120">
      </el-table-column>
      <el-table-column

          label="操作"
          width="100">
        <template slot-scope="scope">
          <!--        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <el-button type="text" size="small" @click=openTeacher(scope.row)>编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <h3>找出年龄大于50岁的老师</h3>
    <el-table :data="teacherage">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="dname" label="学院" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
      </el-table-column>
      <el-table-column prop="tid" label="学号" width="120">
      </el-table-column>
    </el-table>
    <h3>找出所有的男老师</h3>
    <el-table :data="teachersex">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="dname" label="学院" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
      </el-table-column>
      <el-table-column prop="tid" label="学号" width="120">
      </el-table-column>
    </el-table>
    <h3>找出所有在CS学院的老师</h3>
    <el-table :data="teacherdname">
      <el-table-column prop="_id" label="ID" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名字" width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="dname" label="学院" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
      </el-table-column>
      <el-table-column prop="tid" label="学号" width="120">
      </el-table-column>
    </el-table>
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
        <el-button type="primary" @click=" updateData() ">确定</el-button>
      </div>
    </el-dialog>
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
        <el-button type="primary" @click=" updateData1() ">确定</el-button>
      </div>
    </el-dialog>
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
        <el-button type="primary" @click=" updateData2() ">确定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
name: "CategoryList",
  data(){
    return{
      items:[],
      ageless20:[],
      agedname:[],
      course:[],
      coursefcid:[],
      teacherage:[],
      teachersex:[],
      teacherdname:[],
      teacher:[],
      optionid:'',
      questionForm: {
        sid: "",
        name: "",
        age: "",
        birthday:'',
        class:"",
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
      subjectList: ["男", "女"],
      subjectList1: ["M", "F"],
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
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
    }
  },
  methods:{
    async fetch(){
      //console.log("hello")
      const res=await this.$http.get('student')
      this.items=res.data
      console.log(this.items)
    },
    async fetchageless20(){
      //console.log("hello")
      const res=await this.$http.get('studentageless20')
      this.ageless20=res.data
      console.log(this.ageless20)
      //console.log('hello')
    },
    async fetchagedname(){
      //console.log("hello")
      const res=await this.$http.get('studentagedname')
      this.agedname=res.data
      console.log(this.agedname)
      //console.log('hello')
    },
    async fetchcourse(){
      //console.log("hello")
      const res=await this.$http.get('course')
      this.course=res.data
      console.log(this.course)
      //console.log('hello')
    },
    async fetchcoursefcid(){
      //console.log("hello")
      const res=await this.$http.get('coursefcid')
      this.coursefcid=res.data
      console.log(this.coursefcid)
      //console.log('hello')
    },
    async fetchteacher(){
      //console.log("hello")
      const res=await this.$http.get('teacher')
      this.teacher=res.data
      console.log(this.teacher)
      //console.log('hello')
    },
    async fetchteacherage(){
      //console.log("hello")
      const res=await this.$http.get('teacherage')
      this.teacherage=res.data
      console.log(this.teacherage)
      //console.log('hello')
    },
    async fetchteachersex(){
      //console.log("hello")
      const res=await this.$http.get('teachersex')
      this.teachersex=res.data
      console.log(this.teachersex)
      //console.log('hello')
    },
    async fetchteacherdname(){
      //console.log("hello")
      const res=await this.$http.get('teacherdname')
      this.teacherdname=res.data
      console.log(this.teacherdname)
      //console.log('hello')
    },
    openstudent(row){
      this.dialogFormVisible=true
      this.questionForm=row
      this.optionid=row._id
    },
    updateData(){
      //console.log(this.questionForm)
      //console.log(this.optionid)
      this.$http.put(`student/${this.optionid}`,this.questionForm)
      this.dialogFormVisible=false
    },
    openCourse(row){
      this.dialogFormVisible2=true
      this.questionForm2=row
      this.optionid=row._id
    },
    updateData2(){
      this.$http.put(`course/${this.optionid}`,this.questionForm2)
      this.dialogFormVisible2=false
    },
    openTeacher(row){
      this.dialogFormVisible1=true
      this.questionForm1=row
      this.optionid=row._id

    },
    updateData1(){
      this.$http.put(`teacher/${this.optionid}`,this.questionForm1)
      this.dialogFormVisible1=false
    },
  },
  created(){
    this.fetch()
    this.fetchageless20()
    this.fetchagedname()
    this.fetchcourse()
    this.fetchcoursefcid()
    this.fetchteacherage()
    this.fetchteachersex()
    this.fetchteacherdname()
    this.fetchteacher()
  }

}
</script>

<style scoped>

</style>
