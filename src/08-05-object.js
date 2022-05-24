// tao object
//1
const student = {};
student.name = 'Easy Frontend';
student.age = 18;
console.log(student);
//2
const student = {
  name: 'Easy Frontend',
  age: 18,
};
console.log(student);
// kiem tra object co rong hay khong
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty(student));
//
function calcAgeMark(mark) {
  const length = Object.keys(mark).length;
  let sum = 0;
  for (const key in mark) {
    const value = mark[key];
    sum += value;
  }
  return (sum / length).toFixed(1);
}
console.log(calcAgeMark({ math: 10, english: 8 }));
