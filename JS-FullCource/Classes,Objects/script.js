//a js object is an entity having some properties and methods

const student1 = {
    name: "nikhil",
    marks: 20,
    printMarks() {
        console.log("marks are :" + this.marks)
    }
}

student1.printMarks();

//js object have some special properties called prototype property

const student2 = {
    name: "NK",
    printMarks() {
        console.log("marks are:" + this.marks);
    }
}

student2.__proto__ = student1;

console.log(student2);

//class is a template on which object are being made


class Student {
    constructor(name) {
        this.name = name;
        console.log("constructor is called");
    }

    eat() {
        console.log("eating");
    }

    sleep() {
        console.log("sleeping");
    }
}

let std1 = new Student("Nikhil");
let std2 = new Student("Kunal");
let std3 = new Student();

//inhraitance
class CSCStudent extends Student {
    constructor(name) {
        super(name);
    }

    sleep() {
        super.eat();
        console.log("CSC sleeping method :" + this.name);
    }
}

let cs1 = new CSCStudent("Nikhil");
cs1.sleep();