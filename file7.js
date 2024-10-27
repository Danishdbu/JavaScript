// array

const arr = [1,2,3,4,5,true]
const arr1 = [true,false]
const brr = ["Don","Jon","Mon"]

const myarr = new Array(1,6,2,4,5,7,11)
// console.log(myarr)

// method
// myarr.push(6)
// myarr.push(10)

// console.log(myarr)
// myarr.pop()
// console.log(myarr)


// myarr.unshift(0) // shift all element and inset at first posision
// myarr.shift()
// console.log(myarr.includes(53))
// console.log(myarr.includes(5)) // true or false

// console.log(myarr.indexOf(11)) // return index of element

// slice, splice

// const crr = [11,12,14,15,21,32]

// console.log("A",crr)
// console.log(crr.slice(1,3))
// console.log("B",crr)
// console.log(crr.splice(1,3))
// console.log("C",crr)


const marvel = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][2])

// console.log(marvel[3])

a = marvel.concat(dc) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(dc)
console.log(marvel)
console.log(a) //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel,...dc]
console.log(all_new_heros)

const ss = [1,2,3,4,[4,5,6],9,[11,22,[4,5]]]

const myss = ss.flat(Infinity)
console.log(myss)


console.log(Array.isArray("Danish"))
console.log(Array.from("Danish"))
