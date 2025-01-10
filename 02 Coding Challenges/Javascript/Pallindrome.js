function isPallindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPallindrome("noon"));
console.log(isPallindrome("nannny"));
