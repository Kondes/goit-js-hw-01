let userInput = prompt('Введите число');
userInput = Number(userInput);
let total = 0;

for (let i = 1; i <= userInput; i += 1) {
  total += i;
}
console.log(`Total= ${total}`);
