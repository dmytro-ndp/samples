import Logger from './logger.js';

const logger = new Logger();

// Використовуємо метод EventEmitter.on() для підписки на подію 'logEvent'
logger.on('logEvent', (arg) => {
    console.log(`функція зворотнього виклику на подію 'logEvent' 
        була викликана ${arg.timestamp}`);
});

logger.log('повідомлення 1');