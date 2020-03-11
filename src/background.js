"use strict";
import path from "path";
import { app, protocol, BrowserWindow } from "electron";
import {
  createProtocol
  /* installVueDevtools */
} from "vue-cli-plugin-electron-builder/lib";

import { autoUpdater } from "electron-updater"
const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1080,
    height: 800,
    autoHideMenuBar: true,
    frame: true,
    show: false,
    center: true,
    // eslint-disable-next-line no-undef
    icon: path.join(__static, "icon.png"),
    backgroundColor: "#009688",
    title: "AlgoEng",
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    //if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
    autoUpdater.checkForUpdates()
  }

  win.once("ready-to-show", () => {
    win.show();
    win.focus();
  }); 

  win.on("closed", () => {
    win = null;
  });
}


function updateMe(){

  /**
   * Autoupdater events
   */

  autoUpdater.on('checking-for-update', () => {
    console.log('Checking for update');
  });

  autoUpdater.on('error', (error) => {
    console.error('Error while checking for updates', error);
  });

  autoUpdater.on('update-available', (updateInfo) => {
    alert('Mise à jour disponible: ', updateInfo);
  });

  autoUpdater.on('update-not-available', (updateInfo) => {
    console.log('No updates are available', updateInfo);
  });
/* 
  autoUpdater.on('download-progress', (progressInfo) => {
    let logMessage = `speed ${progressInfo.bytesPerSecond} b/s; progress ${progressInfo.percent}%; downloaded ${progressInfo.transferred} out of ${progressInfo.total} bytes`;

    logger.log(logMessage);
  }); */

  autoUpdater.on('update-downloaded', (updateInfo) => {
    alert('Redémarrage nécessaire pour installer les mise à jour: ', updateInfo);

    /* Notify user about ready to be installed update */
    // ...

    /* Or force quit app and install update */
    autoUpdater.quitAndInstall();
  });

  /* Check for updates manually */
  autoUpdater.checkForUpdates();

  /* Check updates every 10 minutes */
  setInterval(() => {
    autoUpdater.checkForUpdates();
  }, 10 * 60 * 1000);
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready",  () => {/* 
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  } */
  createWindow();

  updateMe();
  
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}



