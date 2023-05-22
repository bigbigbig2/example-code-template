<script >

export default {
  name: "home",
  data() {
    return {
      activeMenu: location.hash.slice(1), //获取当前页面url地址来渲染到到当前点击的menu
    };
  },
  methods: {
  },  
};
</script>

<template>
  <div class="basic-layout">
    <!-- 左边导航菜单 -->
    <div class='nav-side'>
      <div class="title">
        <p class="context">code-template</p>
      </div> 
      <el-menu
        :default-active="activeMenu"
        router
        class="nav-menu"
      >
          <el-menu-item index="item1">item1</el-menu-item>
          <el-menu-item index="item2" >item2</el-menu-item>
          <el-menu-item index="item3" >item3</el-menu-item>
          <el-menu-item index="item4" >item4</el-menu-item>
          <el-menu-item index="item5" >item5</el-menu-item>
          <el-menu-item index="item6" >item6</el-menu-item>
          <el-menu-item index="item7" >item7</el-menu-item>
          <el-menu-item index="item8">item8</el-menu-item>
          <el-menu-item index="item9">item9</el-menu-item>
          <el-menu-item index="item10">item10</el-menu-item>
          <el-menu-item index="item1">item1</el-menu-item>
          <el-menu-item index="item2" >item2</el-menu-item>
          <el-menu-item index="item3" >item3</el-menu-item>
          <el-menu-item index="item4" >item4</el-menu-item>
          <el-menu-item index="item5" >item5</el-menu-item>
          <el-menu-item index="item6" >item6</el-menu-item>
          <el-menu-item index="item7" >item7</el-menu-item>
          <el-menu-item index="item8">item8</el-menu-item>
          <el-menu-item index="item9">item9</el-menu-item>
          <el-menu-item index="item10">item10</el-menu-item>
      </el-menu>
    </div>
    <!-- 右边内容块 -->
    <div class="content-right">
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #ffffff;
    color: #fff;
    overflow-y: auto; //设置滚动条
    .title {
      height:50px;
      display:-webkit-box;
      -webkit-box-align:center;/* 垂直居中 */
      -webkit-box-pack:center;/* 水平居中 */
      color: #000000;
      .context {
        font-family: '微软雅黑';
        font-weight:bold
      }
    }
    .nav-menu {
      border-right:none;
      .el-menu-item{
        height:38px;
      }
    }
  }
  /*滚动条美化*/
  .nav-side::-webkit-scrollbar {
    width: 8px;
  }
  .nav-side::-webkit-scrollbar-thumb {
    background: #ccc; // 滑块颜色
    border-radius: 5px; // 滑块圆角
  }



  .content-right {
    margin-left: 200px; //左侧固定，右侧自适应
    height: 100vh;
    .wrapper {
      background: #eef0f3;
      height: 100%;
    }
  }
}
</style>
