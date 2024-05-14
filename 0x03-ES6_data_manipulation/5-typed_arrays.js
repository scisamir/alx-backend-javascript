export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const arrBuffer = new ArrayBuffer(length);
  const arrView = new Int8Array(arrBuffer);
  arrView[position] = value;

  return new DataView(arrBuffer);
}
