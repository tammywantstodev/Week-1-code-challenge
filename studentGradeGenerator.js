let grade=prompt("Input student marks")

function studentGradeGenerator(grade) {
    if (grade > 79 && grade <= 100) {
        return "A"
    } else if (grade >= 60 && grade <= 79) {
        return "B"
    } else if (grade >= 49 && grade <= 59) {
        return "C"
    } else if (grade >= 40 && grade < 49) {
        return "D"
    } else if (grade < 40) {
        return "E"
    }

}