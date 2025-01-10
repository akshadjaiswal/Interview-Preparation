function countCharacterOccurences(str) {
  const count = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}
console.log(countCharacterOccurences("AkshadD"));
