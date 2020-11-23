<template>
  <div id="app">
    <div style="width: 200px; height: 100%;">
      <dynamic-element-menu style="height: 100%" :router="true" :menus="menus" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @></dynamic-element-menu>
    </div>
    <div style="width: 200px;height: 200px;">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data(){
    const MenuItemType = this.MenuItemType
    return {
      isCollapse: false,
      menus: [
        {icon: 'el-icon-location', title: 'Submenu1', index: '1', type: MenuItemType.ElSubmenu, children: [
            {icon: 'el-icon-location', title: 'Submenu2', index: '1-1', type: MenuItemType.ElSubmenu, children: [
                {title: 'Group', type: MenuItemType.ElMenuItemGroup, children: [
                    {title: 'Item1', icon: 'el-icon-location', type: MenuItemType.ElMenuItem, route: '/home', index: '1-1-1'}
                  ]}
              ]}
            ]}
      ]
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
