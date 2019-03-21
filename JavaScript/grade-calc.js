let gradeCalc = function (studentScore, maxScore) {
    let numberGrade = (studentScore / maxScore) * 100
    let letterGrade = ' '  
    if (numberGrade >= 90) {
        letterGrade = 'A'
        return `You got a ${letterGrade} (${numberGrade})!`
    }   else if (numberGrade >= 80) {
        letterGrade = 'B'
        return `You got a ${letterGrade} (${numberGrade})!`       
    }   else if (numberGrade >= 70) {
        letterGrade = 'C'
        return `You got a ${letterGrade} (${numberGrade})!`       
    }   else if (numberGrade >= 60) {
        letterGrade = 'D'
        return `You got a ${letterGrade} (${numberGrade})!`       
    }   else if (numberGrade <= 59) {
        letterGrade = 'F'   
        return `You got a ${letterGrade} (${numberGrade})!` 
    }
}

let grade = gradeCalc(19, 20)
console.log(grade)