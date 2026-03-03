let count = 34;
let name = "lws";
let address = `${name} stays in BD`;
class Car {
    name;
    constructor(input) {
        this.name = input;
    }
}
class Human {
    name;
    constructor(input) {
        this.name = input;
    }
}
let bmw = new Car('BMW Car');
if (bmw instanceof Human) {
    console.log("Yes");
}
else {
    console.log("No");
}
let str = "I created a string with any";
let index = str.indexOf("a");
console.log(index);
export {};
//# sourceMappingURL=learn-type.js.map