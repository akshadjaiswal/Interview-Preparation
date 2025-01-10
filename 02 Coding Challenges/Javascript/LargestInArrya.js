function largestInArray(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [100, 200, 300, 4000, 500, 600];
console.log(largestInArray(arr));
console.log(largestInArray(arr2));
