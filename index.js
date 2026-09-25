function calculateTax(amount){
 return amount * 10/100;
}

function convertToUpperCase(text){
 return text.toUppercase;
}

function findMaximum(num1, num2){
return num1 > num2 ? num1 : num2;
}

function isPalindrome(word){
const cleanWord = word.toLowerCase();
const reversedWord = cleanWord.split('').reverse().join('');
return cleanWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discounrPercentage){
const discountAmmount = (originalPrice * discountPercentage)/100;
return discountAmmount
}

return 


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };