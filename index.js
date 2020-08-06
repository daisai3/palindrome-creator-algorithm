function palindromeCheck(str, low, high) {
    while (low < high) {
        if (str.charAt(low) !== str.charAt(high)) return false;
        low ++;
        high --;
    }
    return true;
}

function PalindromeCreator(str) { 
    const strLen = str.length;
    let low = 0;
    let high = strLen - 1;
    let result = str;
    let removedStr = '';

    while(low < high) {
        if (str.charAt(low) === str.charAt(high)) {
        low ++;
        high --;
        }
        else {      
        if (palindromeCheck(str, low + 1, high)) {
            result = str.substring(0, low) + str.substring(low + 1, high);
            removedStr = str.charAt(low)
        } 
        if (palindromeCheck(str, low, high - 1)) {
            result = str.substring(0, low) + str.substring(low + 1, high);
            removedStr = str.charAt(high);
        } 
        if (palindromeCheck(str, low, high - 2)) {
            result = str.substring(0, low + 1) + str.substring(high + 1, strLen);
            removedStr = str.substring(low + 1, high + 1);
        } 
        if (palindromeCheck(str, low + 2, high)) {
            result = str.substring(0, low + 1) + str.substring(high + 1, strLen);
            removedStr = str.substring(low + 1, high + 1);
        } 
        if (result.length >=3 ) return removedStr;
        return "not possible";
        }
    }
    return "palindrome";
}
     
console.log('mmop--->', PalindromeCreator('mmop'));
console.log('abcdcba--->', PalindromeCreator('abcdcba'));
console.log('kjjjhjjj--->', PalindromeCreator('kjjjhjjj'));
console.log('adjchba--->', PalindromeCreator('abjchba'));
  
  
  