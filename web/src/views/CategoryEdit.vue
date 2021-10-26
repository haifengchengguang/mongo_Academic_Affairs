<template>
  <div class="about">
    <h1>插入数据</h1>
    <el-button @click="handleClick1" type="primary" round>插入学生</el-button>
    <el-button type="primary" round>从excel插入学生</el-button>
  </div>
</template>

<script>
export default {
  name: "CategoryEdit",
  methods:{
    handleClick1(evt){
      this.$alert('hello',evt)
    }
  }
}
</script>

<style scoped>

</style>
