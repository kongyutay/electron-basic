const {app, BrowserWindow} = require('electron')
const path = require('path')
//BrowserWindow 是构造函数

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.resolve(__dirname, './preload')
        }
        //要放上面的配置项来置入预加载脚本

        //可以添加更多的配置项，请参考base-window实例属性
        //alwaysOnTop: true
    })
    win.loadFile('./pages/index.html')
}

app.on('ready', () => {
    //如果应用准备好了，会直接创建窗口
    createWindow();
    
    //让它更像mac窗口（还会出现在dock）
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
        //当窗口被激活的时候，判断现在有没有窗口，创建窗口，所以要封装createWindow函数
    })
})

//让它更像window窗口（全关）
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
        //!== darwin 如果不是苹果
})

