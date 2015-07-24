function LetterChanges(str) {

  // code goes here

  var arr = str.split("");
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arr2 = alphabet.split("");

  for(var i = 0; i < arr.length; i++) {

    for(var j = 0; j < arr2.length; j++)  {

      if(arr[i] === arr2[j]) {

        if(arr[i] === 'z') {
          arr[i] = 'a';
        }
        else if(arr[i] === 'Z') {
          arr[i] = 'A';
        }
        else {
          arr[i] = arr2[j+1];
        }

        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
          arr[i] = arr[i].toUpperCase();
        }

        break;

      }

    }

  }

  arr = arr.join("");
  return arr;

}


print(LetterChanges("abcdefg"));
