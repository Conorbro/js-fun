function LongestWord(sen) {

  var test = sen.split(" ");
  var count = 0;
  var max = 0;
  var ans = 0;

  for(var i = 0; i < test.length; i++) {

    count = 0;

    for(var j = 0; j<test[i].length; j++) {

      if(j===0) {
        var splt = test[i].split("");
      }

      if(isLetter(splt[j])) {
        count += 1;
      }

    }

    if (count > max) {
      max = count;
      ans = i;
    }

  }

  // code goes here
  return test[ans];

}

function isLetter(str) {
  return str.match(/[a-z]/i);
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
print(LongestWord("readline() as asdas asdasd asdasdasdasdasd ???????????????????????????????????????????????????????"));
