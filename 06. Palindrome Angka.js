function angkaPalindrome(num) {
    num++
    var i = num
    while (i < num * num) {
        var str = i.toString().split('').reverse().join('');
        if (i == str) {
            return i;
        }
        i++
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001