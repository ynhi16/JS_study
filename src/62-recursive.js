// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

function countDown(num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(10);

function loop(start, end, callback) {
    if (start < end) {
        callback(start);
        return loop(start + 1, end, callback);
    }
}
var array = ['Javascript', 'PHP', 'Ruby']
loop(0, array.length, function(index) {
    console.log(array[index]);
})