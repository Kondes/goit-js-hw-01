const credits = 23580;
const pricePerDroid = 3000;
const number = prompt('Сколько ты хочешь купить дроидов');
const totalPrice = number * pricePerDroid;
let answer;

if (number === null) {
  answer = 'Отменено пользователем!';
} else if (totalPrice <= credits && number !== null) {
  answer = `Вы купили ${number} дроидов, на счету осталось ${
    credits - totalPrice
  } кредитов.`;
} else {
  credits < totalPrice;
  answer = 'Недостаточно средств на счету!';
}
console.log(answer);
