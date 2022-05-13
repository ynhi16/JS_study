//parameterize(Code JS Is Fun)-> code-js-is-fun

//relaceAll()

function parameterize(str) {
  const lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.replaceAll(' ', '-');
}
console.log(parameterize('Code JS Is Fun'));
// split() and join()
function parameterize(str) {
  const lowerCaseStr = str.toLowerCase();

  return lowerCaseStr.split(' ').join('-');
}
console.log(parameterize('Code JS Is Fun'));
