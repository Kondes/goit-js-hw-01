const credits = 23580;
const pricePerDroid = 3000;

const number = prompt('Сколько ты хочешь купить дроидов');

if (number === null) 
console.log('Отменено пользователем!');

const totalPrice = number * pricePerDroid;

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} 
else
  console.log(
    `Вы купили ${number} дроидов, на счету осталось 
      ${credits - totalPrice}
     кредитов.`,
  );

// const credits = 23580;
// const pricePerDroid = 3000;
// const number = prompt('Сколько ты хочешь купить дроидов');
// const totalPrice = number * pricePerDroid;
// const restCredits = credits - number * pricePerDroid;

// console.log(totalPrice)
// while (number === null) {
//     console.log('Отменено пользователем!');
//     break;
//  } if (totalPrice <= credits){
// console.log(`Вы купили ${number} дроидов,на счету осталось ${restCredits} кредитов`);
//  } else   {
//     console.log('Недостаточно средств на счету!');
//  }
