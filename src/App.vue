<template>
  <div id="app">
    <div style="width: 200px; height: 100%;">
      <dynamic-element-menu style="height: 100%" :menus="menus"></dynamic-element-menu>
    </div>
  </div>
</template>

<script>

import {MenuItemType} from "@/plugins/DynamicElementMenu/modules/dynamic-element-menu";

export default {
  name: 'app',
  components: {

  },
  data(){
    return {
      menus: [
        {icon: 'el-icon-location', title: 'Submenu1', index: '1', type: MenuItemType.ElSubmenu, children: [
            {icon: 'el-icon-location', title: 'Submenu2', index: '1-1', type: MenuItemType.ElSubmenu, children: [
                {title: 'Group', type: MenuItemType.ElMenuItemGroup, children: [
                    {title: 'Item1', type: MenuItemType.ElMenuItem, route: '/home', index: '1-1-1'}
                  ]}
              ]}
            ]}
      ]
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
