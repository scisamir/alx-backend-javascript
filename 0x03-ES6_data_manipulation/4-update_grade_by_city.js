export default function updateStudentGradeByCity(arr, city, newGds) {
  arr.map((item) => {
    let gradeCheck = 0;

    for (let i = 0; i < newGds.length; i++) {
      if (item.id === newGds[i].studentId) {
        item.grade = newGds[i].grade;
        gradeCheck = 1;
      }
      if (gradeCheck === 0 && (i + 1 === newGds.length)) {
        item.grade = 'N/A';
      }
    }
  });

  return arr.filter((item) => item.location === city);
}
