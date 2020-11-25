let userInput = prompt('Введите число');
userInput = Number(userInput);
let total = 0;

for (let i = 1; i <= userInput; i += 1) {
  total += i;
}
console.log(`Total= ${total}`);





// const credits = 23580;
// const pricePerDroid = 3000;
// const number = prompt('Сколько ты хочешь купить дроидов');
// let totalPrice = number * pricePerDroid;
// console.log(totalPrice)
// let restMoney = credits - number * pricePerDroid;

// while (number === null) {
//     console.log('Отменено пользователем!');
//     break;
//  }
 
//  if (totalPrice <= credits){
// console.log(`Вы купили ${number} дроидов,на счету осталось ${restMoney} кредитов`);
//  } else   {
//     console.log('Недостаточно средств на счету!'); 
//  }
