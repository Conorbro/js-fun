function SimpleSymbols(str) {
  for(var i = 0; i<str.length; i++) {
    if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122 || str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
      if(str[i+1] != '+' || str[i-1] != '+') {
        return false;
      }
    }
  }
  return true;
}
print(SimpleSymbols("+D+=3=+s+"));

// REGULAR EXPRESSIONS
//     /pattern/modifiers
// g - global search, doesn't stop after first match
// i - case sensitive search
// | tries to match  the first side, then the second side
// match() returns any matches from the regex as an array object

return ('='+str+'=').match(/([\+][a-z])|([a-z][\+])/gi)===null;
