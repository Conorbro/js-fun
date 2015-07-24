function AlphabetSoup(str) {

  var arr = str.split("");
  var res = [];
  var smallest = 999;
  var length = arr.length;

  for(var j = 0; j<length; j++) {
    smallest = 999;
    for(var i = 0; i<arr.length; i++) {
      if(arr[i].charCodeAt(0) < smallest) {
        smallest = arr[i].charCodeAt(0);
        var nextLetter = arr[i];
        var index = i;
      }
    }
    arr.splice(index, 1);
    res[j] = nextLetter;
  }

  return res.join("");

}

print(AlphabetSoup("cbad"));
