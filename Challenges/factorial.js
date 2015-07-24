function FirstFactorial(num) {

  var result = 1;

  for(var i =num; i >0; i--) {

    result = i*result;
    print(result)
  }

  // code goes here
  return result;

}

print(FirstFactorial(8));
