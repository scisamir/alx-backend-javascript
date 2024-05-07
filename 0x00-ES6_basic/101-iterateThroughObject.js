export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = "";

  for (const name of reportWithIterator) {
    if (name == reportWithIterator[reportWithIterator.length - 1]) {
      employeeNames += name;
    } else {
      employeeNames += name + " | ";
    }
  }

  return employeeNames;
}
