const credits = 23580;
const pricePerDroid = 3000;
const number = prompt('Сколько ты хочешь купить дроидов');
const totalPrice = number * pricePerDroid;
const restCredits = credits - number * pricePerDroid;

console.log(totalPrice)
while (number === null) {
    console.log('Отменено пользователем!');
    break;
 } if (totalPrice <= credits){
console.log(`Вы купили ${number} дроидов,на счету осталось ${restCredits} кредитов`);
 } else   {
    console.log('Недостаточно средств на счету!'); 
 }
  
