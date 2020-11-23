import Vue from 'vue'

export const MenuItemType = {
    ElSubmenu: 1,
    ElMenuItemGroup: 2,
    ElMenuItem: 3,

}
/**
 * 对象或数组深拷贝
 * @param obj
 * @param deep
 * @returns {{}|*[]|*}
 */
const deepCopy = function(obj, deep) {
    if (obj instanceof Array) {
        return [...obj]
    } else if (obj instanceof Object) {
        if (deep) {
            let obj2 = {}
            for (let key in obj) {
                let child = obj[key]
                if (child instanceof Array) {
                    obj2[key] = this.deepCopy(obj[key], deep)
                } else if (child instanceof Object) {
                    obj2[key] = this.deepCopy(obj[key], deep)
                } else {
                    obj2[key] = obj[key]
                }
            }
            return obj2
        } else {
            return { ...obj }
        }
    } else {
        return obj
    }
}
/**
 * 对象或数组合并
 * @param obj1
 * @param obj2
 * @returns {*[]|*}
 */
const merge = function (obj1, obj2) {
    if (Array.isArray(obj1)) {
        return [...obj1, ...obj2]
    } else if (obj1 instanceof Object){
        let objResult = deepCopy(obj1, true)
        let objTemp = deepCopy(obj2, true)
        for (let key in objTemp) {
            if (objTemp.hasOwnProperty(key)){
                objResult[key] = objTemp[key]
            }
        }
        return objResult
    } else {
        throw '无法合并非引用了类型对象'
    }
}
export const DynamicElementMenu = {
    name: 'DynamicElementMenu',
    data(){
      return {
          content: null,
          defaultSubmenuAttribute:{
              index: null,
              popperClass: '',
              showTimeout: 300,
              disable: false,
          }
      }
    },
    props: {
        menus: {
            type: Array,
            require: true,
            default(){
                return []
            }
        },
        mode: { // 模式
            type: String,
            default: 'vertical'
        },
        // 是否水平折叠收起菜单
        collapse: {
            type: Boolean,
            default: false
        },
        //菜单背景色
        backgroundColor: {
            type: String,
            default: '#ffffff'
        },
        //菜单文字颜色
        textColor: {
            type: String,
            default: '#303133'
        },
        // 当前激活菜单颜色
        activeTextColor: {
            type: String,
            default: '#409EFF'
        },
        // 当前激活菜单
        defaultActive: {
            type: String
        },
        // 当前打开的sub-menu的index的数组
        defaultOpeneds: {
            type: Array,
            default() {
                return [];
            }
        },
        // 是否只保持一个菜单打开
        uniqueOpened: {
            type: Boolean,
            default: false
        },
        // 子菜打开的触发方式
        menuTrigger: {
            type: String,
            default: 'hover'
        },
        // 是否使用vue-router的模式
        router: {
            type: Boolean,
            default: false
        },
        // 是否开启折叠动画
        collapseTransition: {
            type: Boolean,
            default: true
        },
        //'class': String,
        //style: String
    },
    render(createElement, context) {
        const that = this
        const elMenuItem = this.renderDom(createElement, this.menus);
        const content = createElement("el-menu", {
            'class': that['class'],
            style: that.style,
            props: {
                mode: that.mode,
                collapse: that.collapse,
                backgroundColor: that.backgroundColor,
                textColor: that.textColor,
                activeTextColor: that.activeTextColor,
                defaultActive: that.defaultActive,
                defaultOpeneds: that.defaultOpeneds,
                uniqueOpened: that.uniqueOpened,
                menuTrigger: that.menuTrigger,
                router: that.route,
                collapseTransition: that.collapseTransition
            },
            on: {
                select: that.onSelect,
                click: that.onClick,
                open: that.onOpen,
                close: that.onClose
            },
            ref: 'menu'
        }, [elMenuItem])
         return content;
    },
    methods: {
        // Menu Methods Start
        open(index){
            this.$refs.menu.open(index)
        },
        close(index){
            this.$refs.menu.close(index)
        },
        // Menu Methods End
        // Menu Events Start
        onClick(){
            this.$emit('click')
        },
        onSelect(index, indexPath){
            this.$emit('select', index, indexPath)
        },
        onOpen(index, indexPath){
            this.$emit('open', index, indexPath)
        },
        onClose(index, indexPath){
            this.$emit('close', index, indexPath)
        },
        // Menu Events End
        renderDom(createElement, options){
            const that = this
            if (Array.isArray(options)){
                for (let i = 0; i < options.length; i++) {
                    const option = options[i]
                    let elementDomName = '' ;
                    //分类
                    switch (option.type){
                        case MenuItemType.ElSubmenu:
                            return that.createElSubmenu(createElement,option)
                        case MenuItemType.ElMenuItemGroup:
                            return that.createElMenuItemGroup(createElement, option)
                        case MenuItemType.ElMenuItem:
                            return that.createElMenuItem(createElement, option)

                    }
                }
            }
        },
        checkChildren(createElement, option){
            if (!option){
                return null
            }
            const that = this
            let children = null
            if (option.children && option.children.length > 0){
                children = that.renderDom(createElement, option.children)
            }
            return children
        },
        createIcon(createElement, iconOption) {
            if (typeof iconOption == 'string'){
                return createElement('i', {
                    'class': iconOption
                })
            }else if (typeof iconOption == 'object'){
                return createElement(iconOption.name, iconOption.props, iconOption.children)
            }
            return null;
        },
        createElSubmenu(createElement, option){
            const
                that = this,
                children = that.checkChildren(createElement,option)
            return createElement('el-submenu', {props:{index: option.index}},[
                createElement('template', {slot: 'title'},
                    [that.createIcon(createElement, option.icon), createElement('span', {slot: 'title'}, option.title)]),children])
        },
        createElMenuItemGroup(createElement, option){
            const
                that = this,
                children = that.checkChildren(option)

            createElement('el-menu-item-group',{props: {title: option.title}},[children])
        },
        createElMenuItem(createElement, option) {
            const
                that = this
            createElement('el-menu-item', {props: {index: option.index, route: option.route, disable: options.disable}},
                [createElement('template', {slot: 'title'},
                    [that.createIcon(createElement, option.icon), createElement('span', {slot: 'title'}, option.title)])])
        }
    }
}