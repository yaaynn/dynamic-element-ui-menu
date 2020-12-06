# dynamic-element-ui-menus
### 源码地址 [GitHub](https://github.com/yaaynn/dynamic-element-ui-menu.git)

### 相关资料 [Element-UI](https://element.eleme.cn/2.14/#/zh-CN/component/menu)

### 水群 [160191117](https://qm.qq.com/cgi-bin/qm/qr?k=Amgxlek89YtZFTUJvV-8JmvSYRMQUtT-&jump_from=webapi)

- ![img](./qrcode.png)

### 关于版本

- 版本采用[大版本.辅助版本.序列]的形式
  - 辅助版本为单数时为正式版本,为双数时为测试版本 
- 测试版本可能只是我为了调试或者发布的版本,请不要贸然使用.

### 更新日志

#### 2020-11-25

- [BUG] 忘记解除循环限制,导致只能执行一次

#### 2020-11-24

- 我什么也没有做.

### 使用说明

#### 安装

```bash
npm install dynamic-element-ui-menu --save
```

#### 引入

```javascript
import DynamicElementUiMenu from 'dynamic-element-ui-menu'
Vue.use(DynamicElementUiMenu)
```

#### 在页面中使用

```vue
<dynamic-element-menu style="height: 100%" router="true" :menus="menus"></dynamic-element-menu>
```

- 为了适应,我并没有定义高度,请自行定义,方便在顶部添加Logo
- menus是主要参数,负责配置菜单
- 其他参数请参考官方文档,我也是按照官方文档来进行开发的

##### iconMaxWidth `string` default: `32px`

		-	图标最大(收缩)大小

##### iconMinWidth `string` default: `23px`

		-	图标最小(扩展)大小

#### menus

```javascript
{
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
```

- 注意,`ElMenuItemGroup`只有一个属性就是`title`

##### Icon

- `string` 使用i进行font-icon进行图标渲染
- `object` 使用自定义节点进行渲染
  - `name`:  标签名称
  - `props`: 标签属性
  - `children`: 标签子级

#### title

- `string` 纯文本,用做标题

#### index

- `string` 节点index属性不明白请看elementui文档

#### type

- `MenuItemType` : 这是一个枚举类型

  ##### MenuItemType

  ###### 枚举值

  - `ElSubmenu`: 对应 el-submenu
  - `ElMenuItemGroup`: 对应 el-menu-item-group
  - `ElMenuItem`: 对应 el-menu-item

  ###### 如何获得它

  - 当我们注册插件的时候,我已经将它放到了`Vue.prototype.MenuItemType = MenuItemType` 里面

  - 所以

  - ```javascript
    this.MenuItemType //便能获得它
    ```

#### route

- `string` 路由地址

#### children

- `object` 子级数据
- 注意,el-menu-item 节点不接受children

### 写在最后

本人能力有限,必然会出现问题,如果有问题还望各位多多包涵,多多指正,谢谢大家.