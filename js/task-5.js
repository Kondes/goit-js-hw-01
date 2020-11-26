const country = prompt('В какую страну доставка');
// const normalizedInput = country.toLowerCase() === 'Китай'.toLowerCase()
// console.log(normalizedInput);

let price;

switch (country) {
  case 'Китай':
    price = '100';
    break;

  case 'Чили':
    price = '250';
    break;

  case 'Австралия':
    price = '170';
    break;

  case 'Индия':
    price = '80';
    break;

  case 'Ямайка':
    price = '120';
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
