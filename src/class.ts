class Student {
    private name: string;
    protected roll: number;
    courses: Array<string>;

    constructor(name: string, roll: number, courses: Array<string>) {
        this.name = name;
        this.roll = roll;
        this.courses = courses
    }
}





class CseStudent extends Student{
    private department: string;

    constructor(name: string, roll: number, couses: Array<string>, department: string){
        super(name, roll, couses);
        this.department = department;
    }
    getInfo(){
        console.log(this.roll);
        console.log(this.department);
        // console.log(this.name) // This is not accessable.... But js ignore this js will print it but TypeScript compilar will find an error. 
    }
}

let Peyal = new CseStudent("Peyal", 651256, ['Webdev', "Frontend"], 'CSE')
// console.log(Peyal)
Peyal.getInfo()