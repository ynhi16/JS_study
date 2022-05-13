// kiểm tra có `@gmail.com` hay không
function hasEmail(str) {
  return str.includes('@gmail.com');
}
console.log(hasEmail('Nhi@gmail.com'));
console.log(hasEmail('Nhiadsadsad.com'));
function hasEmail(str) {
  return str.indexOf('@gmail.com') >= 0;
}
console.log(hasEmail('Nhi@gmail.com'));
console.log(hasEmail('Nhiadsadsad.com'));
function hasEmail(str) {
  return str.lastIndexOf('@gmail.com') >= 0;
}
console.log(hasEmail('Nhi@gmail.com'));
console.log(hasEmail('Nhiadsadsad.com'));
