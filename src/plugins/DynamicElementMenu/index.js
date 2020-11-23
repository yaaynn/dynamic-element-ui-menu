import Vue from "vue";
import { DynamicElementMenu, MenuItemType } from './modules/dynamic-element-menu'

const plugin = {
    initial: false,
    install: function (Vue, options) {
        Vue.component('DynamicElementMenu', DynamicElementMenu)
        Vue.prototype.MenuItemType = MenuItemType
    }
}
export default plugin