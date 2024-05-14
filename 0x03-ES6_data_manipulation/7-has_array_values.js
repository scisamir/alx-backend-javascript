export default function hasValuesFromArray(theSet, anArr) {
  let hasArr = true;

  for (let i = 0; i < anArr.length; i += 1) {
    hasArr = theSet.has(anArr[i]);
    if (hasArr === false) {
      break;
    }
  }

  return hasArr;
}
