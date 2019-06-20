class Grades {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = grade
    }

    getBio() {
        if (this.grade >= 70 && this.grade <= 100) {
            return `${this.firstName} is passing the course` 
        } else {
            return `${this.firstName} is failing the course`
        }
    }
    updateGrade(newGrade) {
        this.grade = newGrade
    }
}

let student = new Grades('Andrew', 'Mead', 70)
console.log(student.getBio())
student.updateGrade(60)
console.log(student.getBio())