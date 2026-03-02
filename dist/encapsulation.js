"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display(name) {
        console.log(`userName: ${this.userName}, age: ${this.age};`);
        this.userName = name;
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
}
let student1 = new User("Peyal", 22);
student1.display('Peyal');
// student1.display()
// console.log(student1)
//# sourceMappingURL=encapsulation.js.map