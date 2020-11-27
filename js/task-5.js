let country = prompt('В какую страну доставка').toLowerCase();
let price;

switch (country) {
  case 'Китай'.toLowerCase():
    price = 100;
    country = 'Китай';
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'Чили'.toLowerCase():
    price = 250;
    country = 'Чили';
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'Австралия'.toLowerCase():
    price = 170;
    country = 'Австралия';
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'Индия'.toLowerCase():
    price = 80;
    country = 'Индия';
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'Ямайка'.toLowerCase():
    price = 120;
    country = 'Ямайка';
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
