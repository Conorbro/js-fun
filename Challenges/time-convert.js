function timeConvert(n) {
  return ((n-n%60)/60).toString()+':'+(n%60).toString();
}
print(timeConvert(210));
