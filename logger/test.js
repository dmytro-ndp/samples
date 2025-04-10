import Logger from './logger.js';

// Create a new instance of Logger
const logger = new Logger();

// Test the 'log' method
logger.on('logEvent', (arg) => {
    console.log(`Test passed: Event emitted with timestamp ${arg.timestamp}`);
});

logger.log('Test message');

// Test the 'info' method
logger.info('Test info message');

// Test the 'warn' method
logger.warn('Test warn message');

// Test the 'error' method
logger.error('Test error message');
