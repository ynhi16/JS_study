// diện tích hình chữ nhật
function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return 0;
  let s;
  s = a * b;
  return s;
}
console.log(calcAreaOfRectangle(2, 5));
// chu vi hình chữ nhật
function calcPerimeterOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return 0;
  let v;
  v = (a + b) * 2;
  return v;
}
console.log(calcPerimeterOfRectangle(2, 5));
// dien tich hinh tron
function calcAreaOfCircle(r) {
  if (r <= 0) return -1;
  return Math.PI * r * r;
}
console.log(calcAreaOfCircle(5));
