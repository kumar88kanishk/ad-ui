import _ from "lodash";

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

export const firstTrueIndex = (arr) => arr.indexOf(true);

export const chunks = (arr, c) => _.chunk(arr, c);

export const populateFalseArray = (l) =>  Array.from({ length:l }, (i) => i = false);