export const circularIndex = (arr, index) => {
	let length = arr.length;
	return ((index % length + length) % length)
};

export const newImageChunkIndex = (i, c) => Math.trunc(i / c);

export const swap = (arr, x,y) =>  {
  var b = arr[x];
  arr[x] = arr[y];
  arr[y] = b;
  return arr;
}
