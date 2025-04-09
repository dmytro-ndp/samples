import http from 'http'; // Імпортуємо модуль HTTP для створення сервера

// Створюємо об'єкт HTTP-сервера
const server = http.createServer((request, response) => {
    if (request.url === '/') {  // Перевіряємо, чи URL запиту є кореневим шляхом
        response.writeHead(200, { 'Content-Type': 'text/plain' }); // Встановлюємо заголовок відповіді
        response.write('Hello World\n'); // Відправляємо відповідь клієнту
        response.end(); // Завершуємо відповідь

    } else { // Якщо URL не кореневий, відправляємо 404 помилку
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Сторінку не знайдено\n');
        response.end();
    }
});

// Запускаємо сервер, слухаємо порт 8080, виводимо повідомлення в консоль
server.listen(8080, () => {
    console.log('Сервер запущено на порту 8080');
});


