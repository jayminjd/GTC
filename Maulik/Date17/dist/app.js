"use strict";
function add(num1, num2, types) {
    if (types !== "as-number") {
        return +num1 + +num2;
    }
    else {
        return +num1 + +num2;
    }
}
add(12, 22, "as-number");
add("30", "55", "as-number");
add("