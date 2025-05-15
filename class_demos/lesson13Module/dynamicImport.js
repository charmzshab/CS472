async function func() {
    let { Student } = await import("./student.js");
    console.log(Student);
    let stu = new Student(123, "Anna");
    console.log(stu.fullName);
}

func();


