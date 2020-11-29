let input;
let total = 0;
do {
  input = prompt("Введите число");
  const inputToNumber = Number(input);
  if (Number.isNaN(inputToNumber)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  total += inputToNumber;
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
