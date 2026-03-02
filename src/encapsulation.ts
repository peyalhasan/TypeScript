
class User {
    private userName: string;
    public age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age
    }
    display(name:string): void {
        console.log(`userName: ${this.userName}, age: ${this.age};`)
        this.userName = name
        
    }
}




class Student extends User {
    id: number;
    department: string

    constructor(id: number, department: string, userName: string, age: number) {
        super(userName, age);
        this.id = id;
        this.department = department;
    }
    // display(): void {
    //     console.log(`userId: ${this.id}, userName: ${this.userName}, age: ${this.age}, department: ${this.department}`)
    // }
}

let student1 = new User("Peyal", 22)
student1.display('Peyal')
// student1.display()

// console.log(student1)