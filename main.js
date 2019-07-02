const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 360,
        height: 280,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })


    mainWindow.loadFile('index.html')
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}


app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})

