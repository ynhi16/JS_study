//Type coersion
const a = 1 + '2'; // '12' so 1 chuyen thanh string

const b = 1 - '2'; // '-1' số 2 chuyen thanh so

const message = 'JS';
if (message) {
  console.log('Hi');
}
// Eplicit conversion
//boolean
const error = 'Wrong!';
const hasError = Boolean(error);
const mark = 9;
const markString = mark.toString(); // or String(mark)
const type = '1';
const typeID = Number.parseInt(type);
