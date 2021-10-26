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
    <h3>找出学生关系中的所有学生</h3>
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
    <h3>检索所有课程情况</h3>
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
  }

}
</script>

<style scoped>

</style>
