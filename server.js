import * as http from 'http';
import * as cookie from 'cookie';
import { marked } from 'marked';

// Створюємо об'єкт HTTP-сервера
const server = http.createServer((request, response) => {
    const cookies = cookie.parse(request.headers.cookie || ''); // Parse cookies from the request

    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Set-Cookie': cookie.serialize('timestamp', new Date().toISOString(), {
                httpOnly: true,
                maxAge: 3600 // 1 hour
            })
        });

        response.write(marked.parse(`# Your cookies:\n ## ${JSON.stringify(cookies)}\n`));
        response.end();

    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Сторінку не знайдено\n');
        response.end();
    }
});

// Запускаємо сервер, слухаємо порт 8080, виводимо повідомлення в консоль
server.listen(8080, () => {
    console.log('Сервер запущено на порту 8080');
});
