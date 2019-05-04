function palindrome(kata) {
  var n = '';
  for (var i = kata.length - 1; i >= 0; i--) {
    n += kata[i]
  }
  return n === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false