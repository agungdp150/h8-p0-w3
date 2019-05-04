function tentukanDeretGeometri(arr) {
    var deret = []
    for (var i = arr.length - 1; i > 0; i--) {
        deret.push(arr[i] / arr[i - 1] == arr[arr.length - 1] / arr[arr.length - 2]);
        deret.sort()
    }
    return deret[0] === true;
}

//TEST CASES

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false