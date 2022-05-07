// viết hàm xem phải là số dương chẳn hay không
// Nếu đúng thì return true, ngược lại false
function isPositiveEvenNumber(number) {
  let isValid;
  if (number > 0 && number % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}
console.log(isPositiveEvenNumber(5));

function isPositiveEvenNumber1(number) {
  if (number > 0 && number % 2 === 0) {
    return true;
  }

  return false;
}
