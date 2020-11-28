const credits = 23580;
const pricePerDroid = 3000;
const number = prompt('Сколько ты хочешь купить дроидов');
const totalPrice = number * pricePerDroid;

if (number === null) {
console.log('Отменено пользователем!');
}
else if  (totalPrice <= credits && number !==null) {
console.log(`Вы купили ${number} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}
 else {(credits < totalPrice) 
  console.log('Недостаточно средств на счету!');
 }