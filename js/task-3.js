const ADMIN_PASSWORD = 'jqueryismyjam';
const authorization = prompt('Введите пароль');
let message;

if (authorization === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

if (authorization === null) 
message = 'Отменено пользователем!';

alert(message);