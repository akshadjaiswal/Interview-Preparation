//Using Method
const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const array = arr.filter((element, index) => arr.indexOf(element) == index);
console.log(array);

//Using Loop
function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] == result[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDuplicates(arr));

function duplicates(arr) {
  let uniqueArr = [];
  for (let i of arr) {
    if (uniqueArr.indexOf(i) == -1) {
      uniqueArr.push(i);
    }
  }
  return uniqueArr;
}
console.log(duplicates(arr));
