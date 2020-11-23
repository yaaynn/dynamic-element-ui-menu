import DynamicElementMenu from './DynamicElementMenu'


const plugin = {
    install: function (Vue, options){
        DynamicElementMenu.install(Vue, options)
    }
}
export default plugin