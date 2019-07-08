import {app, BrowserWindow} from 'electron';
import {join} from 'path';
import {exit} from 'process';

const staticFiles = join(__dirname, 'static');

(async (): Promise<void> => {
    await app.whenReady();
    const mainWindow = new BrowserWindow({
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true,
        },
        width: 800,
    });

    mainWindow.on('close', (): void => {
        exit();
    });

    await mainWindow.loadFile(join(staticFiles, 'index.html'));

    mainWindow.show();
})();
