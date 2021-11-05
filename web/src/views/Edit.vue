<template>
<div>
  <h1>hello {{this.student_course[0]['sid']}}</h1>
  <h1>选课记录</h1>
  <el-table :data="student_course">
    <el-table-column prop="cid" label="课程" width="120">
    </el-table-column>
    <el-table-column prop="score" label="成绩" width="120">
    </el-table-column>
    <el-table-column prop="tid" label="老师" width="120">
    </el-table-column>
  </el-table>

<h1>选课</h1>
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
        <el-button type="text" size="small" @click=selectCourse(scope.row)>选课</el-button>
      </template>
    </el-table-column>

  </el-table>
</div>
</template>

<script>
export default {
  props:{
    id:{}
  },
name: "Edit",
  data(){
    return{
      student_course:[],
      course:[],
      selectcourse:{
        sid:'',
        cid:'',
        score:'',
        tid:''
      }
    }
  },
  methods:{
    async findStudentCourse(){
      const res=await this.$http.get(`studentcourse/${this.id}`)
      this.student_course=res.data
      console.log(res.data)
      //console.log(this.course)
    },
    async fetchcourse(){
      //console.log("hello")
      const res=await this.$http.get('course')
      this.course=res.data
      console.log(this.course)
      //console.log('hello')
    },
    selectCourse(row){
      this.selectcourse.sid=this.student_course[0]['sid']
      this.selectcourse.cid=row.cid
      this.$http.post('selectcourse',this.selectcourse)
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    }

  },
  created() {
    console.log(this.id)
    this.findStudentCourse()
    this.fetchcourse()
  }
}
</script>

<style scoped>

</style>
