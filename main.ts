class Student {
    Id : number;
    Name : string;
    Age : number;
    Gender? : string;
    Address? : string;
    AdmissionMonth? : string;
    Course? : string[];
}


class School {
    student1 = new Student();
    student2 = new Student();

    student1.Age = 15;
    student2.Age = 20;

    let studentAge1 = student1.Age;
    let studentAge2 = student2.Age;

    studentAgeSum(studentAge1,studentAge2){

        return studentAge1+studentAge2;
    }

}

school = new School();
school.studentAgeSub();