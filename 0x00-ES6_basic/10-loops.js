export default function appendToEachArrayValue(array, appendString) {
  const resArr = [];

  for (let val of array) {
    resArr.push(appendString + val);
  };

  return resArr;
}
