export default function appendToEachArrayValue(array, appendString) {
  const resArr = [];

  for (const val of array) {
    resArr.push(appendString + val);
  }

  return resArr;
}
