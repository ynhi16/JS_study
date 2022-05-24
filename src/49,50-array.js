/*
    Array methods:
        forEach();
        every();
        some();
        find();
        filter();
        map();
        reduce();
 */

var courses = [{
        id: 1,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 500,
    },
];
courses.forEach(function(course) {
    console.log(course);
});
// kiem tra xem tat ca
var isFree = courses.every(function(course) {
    return course.coin === 0;
});
console.log(isFree);
// Kiem tra 1 so
// var isFree = course.some(function(course) {
//     return course.coin === 0;
// });
// console.log(isFree);
//
//tim kiem
var course = courses.find(function(course) {
    return course.name === 'Ruby';
});
console.log(course);
//loc thanh danh sach
var listCourse = courses.filter(function(course) {
    return course.name === 'Ruby';
});
console.log(listCourse);

function courseHandler(course) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        //orginArray: courses
    };
}
var i = 0;
var newCourse = courses.map(courseHandler);
console.log(newCourse);

function coinHandler(accumulator, currentValue, currentIndex, array) {
    i++;
    console.log(i);
    return accumulator + currentValue.coin;
}
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log(totalCoin);
var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0);
console.log(totalCoin);