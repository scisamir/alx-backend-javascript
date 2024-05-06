export default function createIteratorObject(report) {
  const myArray = [];

  for (const myKey of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[myKey]) {
      myArray.push(employee);
    }
  }

  return myArray;
}
