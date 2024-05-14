export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  let resStr = '';

  set.forEach((val) => {
    if (val !== undefined) {
      if (val.startsWith(startString) && startString !== '') {
        const subStr = val.substring(startString.length);
        resStr += `${subStr}-`;
      }
    }
  });

  if (resStr !== '') {
    resStr = resStr.substring(0, resStr.length - 1);
  }

  return resStr;
}
