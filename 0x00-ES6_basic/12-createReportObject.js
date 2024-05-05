export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(arg) {
      return Object.keys(arg).length;
    },
  };
}
