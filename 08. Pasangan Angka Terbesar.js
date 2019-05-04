function pasanganTerbesar(num) {
  var angkastr = String(num);
  var terbesar = 0;
  for (var i = 0; i < angkastr.length; i++) {
    if (terbesar < angkastr[i] + angkastr[i + 1]) {
      terbesar = angkastr[i] + angkastr[i + 1];
    }
  }
  return Number(terbesar);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99