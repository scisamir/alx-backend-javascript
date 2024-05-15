export const weakMap = new WeakMap();

export function queryAPI(arg) {
  if (!weakMap.has(arg)) {
    weakMap.set(arg, 1);
    return weakMap.get(arg);
  }

  let nQueries = weakMap.get(arg);
  nQueries += 1;

  if (nQueries >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(arg, nQueries);
  return weakMap.get(arg);
}
