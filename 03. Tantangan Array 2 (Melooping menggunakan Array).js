var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(n) {
  var data = "";
  for (var i = 0; i <= n.length - 1; i++) {
    data = data +
      'Nomor ID : ' + n[i][0] + '\n' +
      'Nama     : ' + n[i][1] + '\n' +
      'TTL      : ' + n[i][2] + ', ' + n[i][3] + '\n' +
      'Hobby    : ' + n[i][4] + '\n\n';
  }
  return data
}

console.log(dataHandling(input))