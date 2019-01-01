<template>
  <el-container>
    <el-header>
      <h1>好多苗小程序后台管理系统</h1>
    </el-header>
    <el-container>
      <el-aside style="width: 200px;">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-message"></i>
            <span slot="title">通知发布</span>
          </el-menu-item>
         <el-menu-item index="2">
            <i class="el-icon-news"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-success"></i>
            <span slot="title">商户认证</span>
          </el-menu-item>
          <el-menu-item index="4" >
            <i class="el-icon-goods"></i>
            <span slot="title">供应信息</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-zoom-in"></i>
            <span slot="title">求购信息</span>
          </el-menu-item>
          <el-submenu index="6" disabled>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>会员体系</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">选项1</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="5-2">
              <template slot="title">选项2</template>
              <el-menu-item index="5-2-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="7">
            <i class="el-icon-star-on"></i>
            <span slot="title">主营业务标签</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <user></user>
        </el-main>
        <el-footer>山东讯多多信息科技有限公司</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import user from "./components/user.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    user
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-header,
.el-footer {
  background-color: #333;
  color: #fff;
}
.el-header > h1 {
  line-height: 20px;
}

.el-footer {
  line-height: 60px;
  text-align: center;
}

.el-aside {
  background-color: rgb(84, 92, 100);
  color: #333;
  line-height: 200px;
  width: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  min-height: 98vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
