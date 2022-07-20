//forEach
var courses = [
    'JavaSript',
    'PHP',
    'Ruby'
];
// courses.length = 1000;
// courses.forEach(function(course, index, array) {
//     console.log(course, index, array);
// });
Array.prototype.forEach2 = function(callback) {

    for (var index in this) {
        if (this.hasOwnProperty(index))
            callback(this[index], index, this);
    }
}
courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});