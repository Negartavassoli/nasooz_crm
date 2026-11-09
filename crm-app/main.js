const { app, BrowserWindow } = require('electron');
require('./server.js');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        title: "سیستم جامع CRM و مکاتبات شرکت نسوز دانا",
        webPreferences: { nodeIntegration: true }
    });
    setTimeout(() => { win.loadURL('http://localhost:3000'); }, 1000);
}
app.whenReady().then(createWindow);