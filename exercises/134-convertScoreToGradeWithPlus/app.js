function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let grade = "";
    let plusOrMinus= "";
    if (score > 100 || score < 0) {
        return "INVALID SCORE";
    }
    if (score >= 90 && score <= 100) {
        grade = "A";
        if (score - 90 <= 2) {
            plusOrMinus = "-";
        }
        if (score - 90 >= 8) {
            plusOrMinus = "+";
        }
    }
    if (score >= 80 && score <= 89) {
        grade = "B";
        if (score - 80 <= 2) {
            plusOrMinus = "-";
        }
        if (score - 80 >= 8) {
            plusOrMinus = "+";
        }
    }
    if (score >= 70 && score <= 79) {
        grade = "C";
        if (score - 70 <= 2) {
            plusOrMinus = "-";
        }
        if (score - 70 >= 8) {
            plusOrMinus = "+";
        }
    }
    if (score >= 60 && score <= 69) {
        grade = "D";
        if (score - 60 <= 2) {
            plusOrMinus = "-";
        }
        if (score - 60 >= 8) {
            plusOrMinus = "+";
        }
    }
    if (score >= 0 && score <= 59) {
        grade = "F";
    }

    return grade + plusOrMinus;
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
