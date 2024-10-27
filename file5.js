// ++++++++++++++++++++++++
// stack(primitive )== copy created , heap(non-primitive) referenced mean dicrect value change hoti hai
// let a = "waser"

// let b = a

// b = "fdser"
// console.log(a)
// console.log(b)

let user = {
    email : "fhb@email.com",
    upi : "user@sbi"

}

let useru = user

useru.email = "gh@google.com"

console.log(user.email)
console.log(useru.email)

