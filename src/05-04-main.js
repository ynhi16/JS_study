// Logical operators
// Nếu là số dương thì ...
function checkNumber1(n) {
  if (n > 0) {
  }
}
// Nếu là số dương chẳn
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}
// Nếu là so dương chẳn lớn hơn 10
function checkNumber3(n) {
  if (n % 2 === 0 && n > 10) {
  }
}
// Nếu số dương chia hết cho 5 lớn hơn 10
function checkNumber4(n) {
  if (n % 5 === 0 && n % 2 === 0 && n > 10) {
  }
}
// Số dương chẳn hoặc số âm lẻ
function checkNumber5(n) {
  if ((n % 2 === 0 && n > 0) || (n % 2 != 0 && n < 0)) {
  }
}
