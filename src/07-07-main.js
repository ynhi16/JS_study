// chuyển chuổi chữ đầu viết hoa còn lại viết thường
function capitalize(str) {
  if (str === '') return '';
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return `${firstLetter}${rest}`;
}

console.log(capitalize('nhi ERdfdsdf'));
