function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return '';
  let result = 'Bad';
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  return result;
}
console.log(classifyStudent(3));
console.log(classifyStudent(8));
console.log(classifyStudent(9));
// if...return
function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark';
  if (mark > 8) return 'Excellence';
  else if (mark >= 7) return 'Good';
  else if (mark >= 4) return 'Not Good';
  return 'Bad';
}
console.log(classifyStudent(3));
console.log(classifyStudent(8));
console.log(classifyStudent(9));
console.log(classifyStudent(12));

function checkMark(mark1, mark2, mark3) {
  let ave = (mark1 + mark2 + mark3) / 3.0;
  console.log(ave);
  if (ave < 0 || ave > 10) return 'Invalid mark';
  if (ave > 8) {
    if (mark1 < 5 || mark2 < 5 || mark3 < 5) return 'Good';
    return 'Excellence';
  }
  if (ave >= 7) {
    if (mark1 < 5 || mark2 < 5 || mark3 < 5) return 'Not good';
    return 'Good';
  }

  if (ave >= 4) {
    if (mark1 < 5 || mark2 < 5 || mark3 < 5) return 'Bad';
    return 'Not good';
  }
  return 'Bad';
}
console.log(checkMark(10, 10, 4));
