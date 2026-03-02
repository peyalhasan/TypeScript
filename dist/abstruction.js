"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
class Student extends User {
    id;
    department;
    constructor(id, department, userName, age) {
        super(userName, age);
        this.id = id;
        this.department = department;
    }
    display() {
        console.log(`userId: ${this.id}, userName: ${this.userName}, age: ${this.age}, department: ${this.department}`);
    }
}
let student1 = new Student(651256, 'CSE', "Peyal", 22);
student1.display();
//# sourceMappingURL=abstruction.js.map