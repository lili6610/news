<template>
  <div>
    <div class="header">新闻后台管理系统</div>
    <el-row>
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo menu"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="helloworld">
            <i class="el-icon-s-platform"></i>
            <span slot="title">Dashboard</span>
          </el-menu-item>
          <el-submenu index="second">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Posts</span>
            </template>
            <el-menu-item index="second">All Posts</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <div style="margin-left:200px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
body {
  height: 100%;
}
.header {
  height: 70px;
  background: #242f42;
  color: white;
  font-size: 22px;
  line-height: 66px;
  padding-left: 64px;
}
.menu {
  position: fixed;
  left: 0;
  width: 200px;
  height: 100%;
}
</style>