// tạo truncate(text, maxlength) nếu text dài hơn max thì sử dụng dấu 3 chấm
//length <= maxlength -> hiện hết
// length > maxlength -> truncate
function truncate(text, maxlength) {
  if (text.length <= maxlength) return text;
  const shortStr = text.slice(0, maxlength - 1);
  return `${shortStr}\u2026`;
}
console.log(truncate('Hello Frontend', 5));
console.log(truncate('Hello', 5));
