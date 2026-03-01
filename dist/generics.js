"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetings(param1, param2) {
    console.log(`Hello ${param1}.Type of ${param1} is ${typeof param1} || Hello ${param2}.Type of ${param2} is ${typeof param2}`);
}
greetings(1234, 'Tapas');
class MyClass {
    value = "Hello";
}
class MyClass1 {
    value = 1234;
}
class GenericClass {
    value;
    item;
    constructor(value, item) {
        this.value = value;
        this.item = item;
    }
}
const myValue = new GenericClass('Hello', 123);
//# sourceMappingURL=generics.js.map