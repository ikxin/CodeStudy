<template>
  <div>
    <el-card>
      <button>原生按钮</button>
      <input type="text" />
    </el-card>
    <el-card>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
    </el-card>
    <el-card>
      <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
