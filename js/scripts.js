var isVowel =function(char){
  if(char==='a'){
    return true;
  }else if(char==='e'){
    return true;
  }else if (char === 'i'){
    return true;
  }else if (char === 'o'){
    return true;
  }else if (char === 'u'){
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
  $(".form-group").submit(function(event){
    event.preventDefault();
    var stringInput = $("#sentence").val();
    var dashedString = changeDash(stringInput);
    console.log(dashedString);
    $("p").text(dashedString);
  });
});
