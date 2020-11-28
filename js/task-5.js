let country = prompt('В какую страну оформить доставку?');
let price;
let results;

if (country === null) {
  results = 'Отменено пользователем!';
} 
else {
  switch (country.toLowerCase()) {
    case 'китай':
      price = 100;
      country = 'Китай';
      break;
    case 'чили':
      price = 250;
      country = 'Чили';
      break;
    case 'австралия':
      price = 170;
      country = 'Австралию';
      break;
    case 'индия':
      price = 80;
      country = 'Индию';
      break;
    case 'ямайка':
      price = 120;
      country = 'Ямайку';
      break;
    default:
      results = 'В вашей стране доставка не доступна';
  }
}
if (!results) {
  results = `Доставка в ${country} будет стоить ${price} кредитов`;
}

alert(results);
