// compile time error
// console.log(1;

// run time error
// reference error
// console.log(x);



try{
    console.log("Try block starts here");
    console.log(x);
    console.log("Try block end here");

    //a

    //b

    //c
}
catch(error){
 // define krte hai,error ke sath aap krna chahte hai
 // retry logic
 // fallback mechanism
 // loggingg
 // custom error
 console.log("I am inside catch block");
 console.log("your error is here",error);
}
finally{
    console.log(" I will run everytime, as i am finally block");
}