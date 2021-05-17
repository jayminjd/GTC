export {}
const btn = document.querySelector("button");
const n1 = document.getElementById("num1")! as HTMLInputElement;
const n2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1:number,num2:number)
{
    return num1 + num2;
}

btn.addEventListener("click",function(){
    console.log(add(+n1.value,+n2.value));
});