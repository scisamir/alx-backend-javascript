export default function createIteratorObject(report) {
  const myArray = [];

  for (let myKey of Object.keys(report.allEmployees)) {
    for (let employee of report.allEmployees[myKey]) {
      myArray.push(employee);
    }
  }

  return myArray;
}
