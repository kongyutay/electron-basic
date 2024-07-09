//主进程和渲染进程的通信要用预加载脚本
//预加载脚本是在浏览器环境运行的，但是也可以访问一部分node api
//console.log('preload')
//以上这个不会在node命令行打印出来，而是浏览器

//执行顺序： 主进程 -> 预加载进程 -> 渲染进程

//console.log(process.version);
//可以打印node版本了

const {contextBridge, ipcRenderer} = require('electron')

//这个方法只能访问一部分的node api(xyz: __dirname)
contextBridge.exposeInMainWorld('myAPI', {
    version: process.version,
    saveFile: (data)=> {
        //类似消息订阅和发布，第一个参数是信道，第二个是数据
        ipcRenderer.send('file-save', data)
    },
    readFile() {
        //invoke 是一个promise
        return ipcRenderer.invoke('file-read')
        
    }

})
//会往window对象添加abc属性，这个属性是一个对象装着xyz