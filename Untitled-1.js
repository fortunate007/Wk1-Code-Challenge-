
function getStudentGrade() {
    let marks = prompt("Enter student marks (between 0 and 100):");
    marks = parseInt(marks);

    if (marks > 100 || marks < 0 || isNaN(marks)) {
        return "Invalid marks entered. Please enter a value between 0 and 100.";
    }

    if (marks > 79) {
        return "Grade: A";
    } else if (marks >= 60) {
        return "Grade: B";
    } else if (marks >= 50) {
        return "Grade: C";
    } else if (marks >= 40) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}


// console.log(getStudentGrade());
