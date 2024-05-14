export default function hasValuesFromArray(theSet, anArr) {
  let hasArr = true;

  anArr.map((elem) => {
    hasArr = theSet.has(elem);
    if (hasArr === false) {
      return;
    }
  });

  return hasArr;
}
