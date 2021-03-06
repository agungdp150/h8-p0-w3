function cariMean(arr) {
  arr.sort(function (a, b) {
    return a - b
  });
  var half = Math.floor(arr.length / 2);
  if (arr.length % 1.5) {
    return arr[half];
  } else
    return (arr[half - 1] + arr[half]) / 2.0
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7