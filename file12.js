class Human{
    // properties
    age = 13; // public
    #wt = 30; // private
    ht;
    constructor(newage,newht){
        this.age = newage;
        this.newheight = newht
    }


    // behaviour
    walking(){
        console.log("I am walking" ,this.#wt)
    }
    running(){
        console.log("I am running")
    }
}

let obj = new Human(50,32);
// console.log(obj.#wt)

// obj.running()
// obj.walking()
console.log(obj.newheight)
console.log(obj.age)
