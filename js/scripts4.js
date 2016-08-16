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


})
