function FirstReverse(str) {

  var arr = str.split("");
  var newStr = [];

  for(var i = 0; i <= str.length; i++) {

    newStr[i] = arr[str.length - i];

  }
  newStr = newStr.join("");
  return str;

}

FirstReverse("reverse");
