export default function getStudentsByLocation(arr, loc) {
  return arr.filter((item) => item.location === loc);
}
