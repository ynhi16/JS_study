//[a,b] với a < b
function randomNumberInRange(a, b) {
  if (a >= b) return -1;
  const random = Math.random() * (b - a);
  return Math.round(random) + a;
}
console.log(randomNumberInRange(10, 100));
console.log(randomNumberInRange(100, 999));
console.log(randomNumberInRange(1000, 9999));
