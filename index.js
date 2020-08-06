function palindromeCheck(str, low, high) {
    while (low < high) {
        if (str.charAt(low) !== str.charAt(high)) return false;
        low ++;
        high --;
    }
    return true;
}


  
  
  