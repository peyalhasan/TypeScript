interface Customer{
    name: string;
    address: string;
}
const hm: Customer = {
    name: "H$M Naim",
    address: 'Dhaka',
}

class GoldenChase implements Customer{
    name: string;
    address: string;
    constructor(name: string, address: string){
        this.name = name;
        this.address = address
    }
}

const abcd = new GoldenChase("ABCD", "Dhaka")
console.log(abcd)


// Types vs interface 

type address = string;

type StringOrNumber =  string | number;

type Movies = "Horror" | "Comedy" | "Romantic"


const data: Movies = "Horror"
console.log(data)

interface A {
    name: string;
}

interface B{
    age: number;
}

type AB = A | B

const datas: AB ={
    age: 12
}
console.log(datas)