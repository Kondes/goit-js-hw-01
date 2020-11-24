const ADMIN_PASSWORD = 'jquerryismyjam';
const authorization = prompt('Введите пароль');
let message;

if (authorization === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

while (authorization === null) {
  message = 'Отменено пользователем!';
  break;
}
alert(message);
