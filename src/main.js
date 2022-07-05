'use strict';

const { app, BrowserWindow } = require('electron');

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

// 全ウィンドウ終了時の処理
app.on('window-all-closed', () => {
  app.quit();
});

// 準備が整った際の処理
app.on('ready', () => {
  const browserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      enableRemoteModule: true,
    },
  });

  const url = `file://${__dirname}/index.html`;
  browserWindow.loadURL(url);
});
