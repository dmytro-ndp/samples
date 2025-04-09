// Імпортуємо EventEmitter з модуля 'events'
import EventEmmitter from 'events';

// Визначаємо клас Logger з одним методом log, що розширює EventEmitter
class Logger extends EventEmmitter {
    log(message) {
        // Додати префікс до повідомлення
        const prefixedMessage = `[LOG]: ${message}`;
        console.log(prefixedMessage);

        // Викликаємо подію з поверненням часу виниклення події
        this.emit('logEvent', { timestamp: new Date().toISOString() });
    }
}

// Це дозволяє імпортувати клас Logger в інших файлах
export default Logger;