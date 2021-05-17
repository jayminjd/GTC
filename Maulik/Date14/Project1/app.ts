//  1. function types
    // function add(n1:number,n2:number):number
    // {
    //     return n1+n2;
    // }
    // function printResult(num : number):undefined
    // {
    //     console.log("Result :" + num);
    //     return;
    // }
    // printResult(add(51,12));

    // let combineValues : (a:number,b:number)=>number;
    // // combineValues = add;
    // combineValues = printResult
    // // combineValues = 5;

    // console.log(combineValues(8,8));


    // let nothing : undefined;
    // nothing;
// 2. callback function
    // function addAndHandle(n1:number,n2:number,cb:(num:number)=>void)
    // {
    //     const result = n1 + n2;
    //     const ans = cb(result);
    //     console.log(ans);
        
    // }

    // addAndHandle(10,20,(result)=>{
    //     console.log(result);
    //     return result*2;
    // });
// 3. unknown type

    // let userInput:any;
    // let userName:string
    // userInput = 5;
    // userInput = "Max";
    // userName = userInput;

    // let userInput:unknown;
    // let userName:string
    // userInput = 5;
    // userInput = "Max";
    // if(typeof userInput === "string")
    //     userName = userInput;
    // console.log(userName);
    
// 4. the never type
    function generateError(message:string,code:number):never{
        throw {message:message,errorCode : code};
    }
    generateError("An error Occurred",500);

    