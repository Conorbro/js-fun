function LetterCapitalize(str) {

  var arr = str.split("");
  for (var i = 0; i<str.length; i++) {
    if (arr[i] === ' ') {
      arr[i+1] = arr[i+1].toUpperCase();
      print(arr[i+1].toUpperCase());
    }
  }
  arr = arr.join("");
  return arr;

}

print(LetterCapitalize("a b c d"));
