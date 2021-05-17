const btn = document.querySelector("button");
const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");

function add(num1,num2){
    if(typeof num1==="number" && typeof num2==="number")
    {
        return num1 + num2;
    }
    else
    {
        return +num1 + +num2
    }
}

btn.addEventListener("click",function(){
    console.log(add(n1.value,n2.value));
})