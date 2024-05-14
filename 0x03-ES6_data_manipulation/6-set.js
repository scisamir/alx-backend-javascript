export default function setFromArray(arr) {
  let mySet = null;

  if (Array.isArray(arr)) {
    mySet = new Set(arr);
  }

  return mySet;
}
