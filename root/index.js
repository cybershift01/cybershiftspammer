const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let window = null;

app.once('ready', () => {
  window = new BrowserWindow({
    width: 1000, // Módosított szélesség
    height: 800, // Módosított magasság
    backgroundColor: "#FFFFFF", // Módosított háttérszín
    icon: __dirname + '/modified_icon.ico', // Új ikon elérési útja
    show: false
  });

  window.setMenuBarVisibility(false);

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  window.once('ready-to-show', () => {
    window.show();
  });
});
