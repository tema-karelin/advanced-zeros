module.exports = function getZerosCount(number, base) {
  // your implementation
  let zero = 0;
  let PrimeNumbers = [];
  let NewNumber = base;
  let i = 2;
  while (i <= NewNumber) { //Разложение системы счисления на простые множители 
    if (NewNumber%i == 0) {
      PrimeNumbers.push(i);
      NewNumber /=i; 
    } else {i++};
  };
  let n = PrimeNumbers.length -1; // Номер последнего (и максимального) элемента массива простых множителей 
  let MaxPrimeNumber = PrimeNumbers[n]; // Максимальное простое число в системе счисления
  let MaxPrimeNumberDegree = 1; 
  for (n; PrimeNumbers[n] == PrimeNumbers[n-1]; n--) {MaxPrimeNumberDegree++}; // Степень максимального простого числа
  for (let j=1; Math.pow(MaxPrimeNumber,j)<=number; j++) { // Подсчет количества нулей в заданном факториале
    zero += Math.floor(number/(Math.pow(MaxPrimeNumber,j)));
  };
  // return [PrimeNumbers, MaxPrimeNumber, MaxPrimeNumberDegree, zero/MaxPrimeNumberDegree]; // Для проверки
  zero = Math.floor(zero/MaxPrimeNumberDegree); 
  return zero;
}