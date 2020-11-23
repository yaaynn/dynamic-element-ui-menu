# dynamic-element-ui-menus

## IconOption
### string
-   使用默认的i标签绘制
## JSON结构
-   默认json结构
```
{icon: 'el-icon-location', title: 'Submenu1', index: '1', type: MenuItemType.ElSubmenu, children: [
            {icon: 'el-icon-location', title: 'Submenu2', index: '1-1', type: MenuItemType.ElSubmenu, children: [
                {title: 'Group', type: MenuItemType.ElMenuItemGroup, children: [
                    {title: 'Item1', type: MenuItemType.ElMenuItem, route: '/home', index: '1-1-1'}
                  ]}
              ]}
            ]}
```