// Word Puzzle
var isVowel =function(char){
  if(char==='a'|| char ==='A'){
    return true;
  }else if(char==='e' ||char==='E'){
    return true;
  }else if (char === 'i' ||char ==='I'){
    return true;
  }else if (char === 'o' || char ==='O'){
    return true;
  }else if (char === 'u' || char==='U'){
    return true;
  }else {
    return false;
  }
}
var changeDash = function(string){
  var stringArray=string.split('');
  for(var i=0;i<stringArray.length;i++){
    if(isVowel(stringArray[i])){
      stringArray[i]='-';
    }
  }
  var newString = stringArray.join("");
  return newString;
}
$(function(){
  $("#one").submit(function(event){
    event.preventDefault();
    var stringInput = $("#sentence").val();
    var dashedString = changeDash(stringInput);
    $("#sen").hide();
    $("p#puzzle").text(dashedString);
  });
});
// Palindrome
var isPalindrome = function(word){
  var splitBySpace = word.split(" ");
  var wordSplit = splitBySpace.slice();
  var reverseArray = splitBySpace.join("").split("");
  reverseArray.reverse();
  var changed = reverseArray.join("");
  word = wordSplit.join("");
  if (word === changed){
    return "This is a Palindrome";
  } else {
    return "This is not a Palindrome";
  }
}
$(document).ready(function(){
  $("#two").submit(function(event){
    event.preventDefault();
    var wordInput = $("#palin-phrase").val();
    var output = isPalindrome(wordInput);
    $("p#palindrome").text(output);
  });
});
// Factorial
var factorial = function(firstNumber){
  var number = 1;
  for(var index=firstNumber; index>0; index-=1){
    number *= index;
  }
  return number;
}
$(function(){
  $("#three").submit(function(event){
    event.preventDefault();
    var originalNumber = parseInt($("#number").val());
    var factorialNumber = factorial(originalNumber);
    $("p#factorial").text(factorialNumber);
  });
});
// Sieve
var findPrimeNumbers = function(number){
  var array=[];
  for(var i =0;i<number-1;i++){
    array[i]=i+2;;
  }
  for(var prime=2 ;prime<array.length;prime++){
    for(var i=0;i<array.length;i++){
      if(array[i]!==prime && array[i]%prime===0){
        array.splice(i,1);
      }
    }
  }
  return array;
}
$(function(){
  $("#sieve").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("#sieve-number").val());
    var primeArray = findPrimeNumbers(inputNumber);
    primeArray.forEach(function(item){
      $("ul#sieve-list").append("<li>" +item+"</li>");
    });
  });
});
