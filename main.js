const { app, BrowserWindow } = require('electron')

let eWindow

function createWindow() {
  eWindow = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/networx.png`
  })

  eWindow.loadURL(`file://${__dirname}/dist/index.html`)

  //eWindow.webContents.openDevTools()

  eWindow.on('closed', function() {
    eWindow = null
  })
}

app.on('ready', createWindow)
app.on('activate', function() {
  if (!eWindow) {
    createWindow()
  }
})
app.on('browser-window-created', function(e, window) {
  window.setMenu(null)
})

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') { // darwin equals macOS
    app.quit()
  }
})
