class Student {

    id:                 number;
    name:               string;
    age:                number;
    gender?:            string;
    address?:           string;
    admissionMonth?:    string;
    course?:            string;

    constructor(
        id:                 number,
        name:               string,
        age:                number,
        gender?:            string,
        address?:           string,
        admissionMonth?:    string,
        course?:            string,
    ){
        this.id             = id;
        this.name           = name;
        this.age            = age;
        this.gender         = gender;
        this.address        = address;
        this.admissionMonth = admissionMonth;
        this.course         = course;

    };
}


class School {
    studentAgeSum(studentAge1: number, studentAge2: number){
        return (studentAge1 + studentAge2);
    }

}
let student1 = new Student(1,'None', 15, 'None', 'None', 'None', 'None');
let student2 = new Student(2,'None', 15, 'None', 'None', 'None', 'None');

let school = new School();
let ageSum = school.studentAgeSum(student1.age, student2.age);
console.log(ageSum);
