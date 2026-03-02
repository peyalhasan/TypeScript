
abstract class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age
    }

    // abstract displa(): void;
}




class Student extends User {
    id: number;
    department: string

    constructor(id: number, department: string, userName: string, age: number) {
        super(userName, age);
        this.id = id;
        this.department = department;
    }
    display(): void {
        console.log(`userId: ${this.id}, userName: ${this.userName}, age: ${this.age}, department: ${this.department}`)
    }
}

let student1 = new Student(651256, 'CSE', "Peyal", 22)
student1.display()