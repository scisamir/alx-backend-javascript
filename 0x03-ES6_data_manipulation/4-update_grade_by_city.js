export default function updateStudentGradeByCity(arr, city, newGds) {
  return arr.map((item) => {
    let gradeCheck = 0;

    for (let i = 0; i < newGds.length; i += 1) {
      if (item.id === newGds[i].studentId) {
        item = { ...item, grade: newGds[i].grade };
        gradeCheck = 1;
        break;
      }
      if (gradeCheck === 0 && (i + 1 === newGds.length)) {
        item = { ...item, grade: 'N/A' };
      }
    }

    return item;
  }).filter((item) => item.location === city);
}
