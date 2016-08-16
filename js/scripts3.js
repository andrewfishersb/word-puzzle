
var isPalindrome = function(word){
  var wordArray = word.split("");
  var anotherArray = wordArray.reverse();

  var changed = anotherArray.join("");
      word = wordArray.join("");

  if (word === changed){
    return "This is a Palindrome";
  } else {
    return "This is not a Palindrome";
  }
}

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var wordInput = $("#phrase").val();
    var output = isPalindrome(wordInput);
    $("p").text(output);
  });
});
