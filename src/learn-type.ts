let count: number = 34
let name: string = "lws"
let address:string = `${name} stays in BD`


class Car {
    name: string;
    constructor(input:string){
        this.name = input;
    }
}

class Human {
    name: string;
    constructor(input:string){
        this.name = input;
    }
}


let bmw = new Car('BMW Car')
if(bmw instanceof Human){
    console.log("Yes")
}else{
    console.log("No")
}

let str: any = "I created a string with any";

let index:number = (str as string).indexOf("a")
console.log(index)