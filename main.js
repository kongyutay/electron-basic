const {app, BrowserWindow} = require('electron')
//BrowserWindow 是构造函数

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        //可以添加更多的配置项，请参考base-window实例属性
        //alwaysOnTop: true
    })
    win.loadFile('./pages/index.html')
})