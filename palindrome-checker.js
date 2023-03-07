function palindrome(str) {

  var reg = /[\W_]/g; //Any Non-AlphaNumeric Characters 

  var smallStr = str.toLowerCase().replace(reg,"");
  console.log(smallStr);

  var reversed = smallStr.split("").reverse().join("");

  if(reversed === smallStr)
    return true;
  else
    return false;
}

console.log(palindrome("Eye"));