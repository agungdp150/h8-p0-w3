//Step 1

function balikString(str) {
  var dibalik = "";
  for (var i = str.length - 1; i >= 0; i--) {
    dibalik += str[i]
  }
  return dibalik
}

console.log(balikString('Hello World!'));



//Step 2
/*
function balikString(str) {
  var dibalik = '';
  for (var i = 0; i < str.length; i++) {
    dibalik = str[i] + dibalik;
  }
  return dibalik;
}
console.log(balikString('Hello World!'))
*/
