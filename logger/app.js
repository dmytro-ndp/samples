import Logger from './logger.js';

const logger = new Logger();

// Використовуємо метод EventEmitter.on() для підписки на подію 'logEvent'
logger.on('logEvent', (arg) => {
    console.log(`функція зворотнього виклику на подію 'logEvent' 
        була викликана ${arg.timestamp}`);
});

logger.log('повідомлення 1');

// Demonstrating the usage of different logging levels
logger.info('This is an informational message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');