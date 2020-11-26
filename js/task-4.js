const credits = 23580;
const pricePerDroid = 3000;

const number = prompt('Сколько ты хочешь купить дроидов');

if (number === null) {
console.log('Отменено пользователем!');
}

const totalPrice = number * pricePerDroid;
if (totalPrice <= credits && number !==null ){
console.log(`Вы купили ${number} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);

}if (credits < totalPrice){
  console.log('Недостаточно средств на счету!');
}