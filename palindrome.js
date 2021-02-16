const palindrome = str => {
  // turn string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the comparison
  console.log(str === str.split('').reverse().join(''))

}

palindrome("Kayak");
palindrome("Bear");