"use strict";
exports.__esModule = true;
var btn = document.querySelector("button");
var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", function () {
    console.log(add(+n1.value, +n2.value));
});
