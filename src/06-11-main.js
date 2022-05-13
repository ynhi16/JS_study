//lay hang don vị cua so co 3 chu so
function extractTheOnes(n) {
  if (n.toString().length != 3) return -1;
  return n % 10;
}
console.log(extractTheOnes(123));
// lay hang chuc cua so co 3 chu so
function extractTheTens(n) {
  if (n.toString().length != 3) return -1;
  n = n % 100;
  return Math.trunc(n / 10);
}
console.log(extractTheTens(123));
// lay chu so hang tram
function extractTheHundreds(n) {
  if (n.toString().length != 3) return -1;

  return Math.trunc(n / 100);
}
console.log(extractTheHundreds(165));
// tong 3 so cua so co 3 chu so
function sumDigits(n) {
  if (n.toString().length != 3) return -1;
  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);
  return ones + tens + hundreds;
}
console.log(sumDigits(583));
