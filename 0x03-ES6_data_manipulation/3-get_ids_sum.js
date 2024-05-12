export default function getStudentIdsSum(arr) {
  return arr.reduce((res, item) => res + item.id, 0);
}
