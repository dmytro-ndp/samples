import fs from 'node:fs';
import path from 'node:path';

class Logger extends EventEmmitter {
    constructor(logFilePath = 'logs.txt') {
        super();
        this.logFilePath = path.resolve(logFilePath);
    }

    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        const formattedMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
        console.log(formattedMessage);

        // Запис у файл
        fs.appendFile(this.logFilePath, formattedMessage + '\n', (err) => {
            if (err) {
                console.error('Помилка запису в лог-файл:', err);
            }
        });

        // Викликаємо подію
        this.emit('logEvent', { timestamp, level, message });
    }

    info(message) {
        this.log(message, 'info');
    }

    warn(message) {
        this.log(message, 'warn');
    }

    error(message) {
        this.log(message, 'error');
    }
}

export default Logger;