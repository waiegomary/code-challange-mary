//promts user to input student marks
const gradeRanges = [
    { grade: 'A', min: 80, max: 100 },
    { grade: 'B', min: 60, max: 79 },
    { grade: 'C', min: 50, max: 59 },
    { grade: 'D', min: 40, max: 49 },
    { grade: 'E', min: 0, max: 39 }
];

function inputGrade(mark){
    if (mark < 0 || mark > 100){
        return 'input inavlid. please entewr a mark between 0 and 100.';
    }
    
    for (let i =0; i < gradeRanges.lenghth; i++) {
        if(mark>= gradeRanges[i].min && mark <= gradeRanges[i].grade){
            return gradeRanges [i].grade;
        }
    }
}
const mark = Number(prompt("Enter the student mark: "));
const grade = inputGrade(mark);
console.log(`The student's grade is: ${grade}`);