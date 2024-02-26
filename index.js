for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("====================================================");
for (let i = -100; i <= 0; i++) {
    console.log(i);
}
console.log("====================================================");
for (let i = 100; i >= 1; i--) {
    console.log(i);
}
console.log("====================================================");
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}
console.log("====================================================");
for (let i = 3; i <= 100; i += 3) {
    console.log(i);
}
console.log("====================================================");
var arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);
console.log("====================================================");
var arr = [];
for (let i = 2; i <= 100; i += 2) {
    arr.push(i);
}
console.log(arr);
console.log("====================================================");
arr = [2, 4, 3, 6, 7, -8, 7, -5, 1, 11, 10, 9, -6, -7, 13, 14, 11, 15];
let quantity = 0;
arr.forEach(i => ((i < 0) ? quantity++ : quantity = quantity));
console.log(quantity);
console.log("====================================================");
arr = [2, 4, 3, 6, 7, -8, 7, -5, 1, 11, 10, 9, -6, -7, 13, 14, 11, 15];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
console.log("====================================================");
let str = "Some string!";
str = str.slice(0, -1);
console.log(str);