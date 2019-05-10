let gradeCalc = function (studentScore, maxScore) {
    if (typeof studentScore === 'number' && typeof maxScore === 'number) {
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
    } else {
        throw Error('Please Enter A Number')
    }
}

try {
    let grade = gradeCalc(19, 20)
    console.log(grade)    
} else (e) {
    console.log(e.message)
}

