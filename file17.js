

// code 1
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para " + i;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();

// console.log("total time by code 1 " + (t2-t1));

// // code 2
// const t3 = performance.now();
// let mydiv = document.createElement('div');
// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para " + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4 = performance.now();

// console.log("total time by code 2 " + (t3-t4));

// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para " + i;
//     // No reflow and No repaint for the below line
//     fragment.appendChild(para);
// }
// // the below line take one reflow and repaint 
// document.body.appendChild(fragment);

// let firstPromise = new Promise( (resolve,reject) =>{
//     console.log("Danish");
//     // resolve(1001);
//     reject(new Error("Internal Server Error"));

// });



// let firstPromise = new Promise( (resolve,reject) =>{
   
//     setTimeout(function sayName(){
//         console.log("My name is Danish");
//     },15000);
//     resolve(1);

// });

// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside set timeout block")

//     },3000);
    
// }

// getData()

// // await 
// // fetch API


// async function getdata() {
//     // get request -> async
//    let reponse = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//    // parse json -> async
//    let data = await reponse.json();

//    console.log(data);
   
// }

// getdata()
// scenario:
// prepare url/api endpoint -> sync
// await // fetch data -> network call -> async
// process data -> sync


// closure -> collection of function and requre data .
function outerFun(){
    
    let name = "Love";
    function innerFun(){
       
        console.log(name);
    }
    return innerFun;
}
let inner = outerFun();
inner();