import plugin from "./packages"

const plug = {
    install(Vue,options){
        plugin.install(Vue, options)
    }
}

export default plug