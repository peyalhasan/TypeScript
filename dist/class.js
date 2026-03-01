"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    roll;
    courses;
    constructor(name, roll, courses) {
        this.name = name;
        this.roll = roll;
        this.courses = courses;
    }
}
class CseStudent extends Student {
    department;
    constructor(name, roll, couses, department) {
        super(name, roll, couses);
        this.department = department;
    }
    getInfo() {
        console.log(this.roll);
        console.log(this.department);
        // console.log(this.name) // This is not accessable.... But js ignore this js will print it but TypeScript compilar will find an error. 
    }
}
let Peyal = new CseStudent("Peyal", 651256, ['Webdev', "Frontend"], 'CSE');
// console.log(Peyal)
Peyal.getInfo();
//# sourceMappingURL=class.js.map