let src = {
    age : 12,
    wt :32,
    ht : 123
};

// let dest = {...src};
// src.age = 70;
// console.log("src: " ,src);

// console.log("dest: " ,dest);

let sr2 = {
    val :101,
    name: "Danish"
}

let dest = Object.assign({},src,sr2)
src.age = 70;
console.log("src: " ,src);

console.log("dest: " ,dest);