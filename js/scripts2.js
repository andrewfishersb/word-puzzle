var factorial = function(firstNumber){
	var number = 1;
	for(var index=firstNumber; index>0; index-=1){
		number *= index;
	}
	return number;
}

$(function(){
	$("#form").submit(function(event){
		event.preventDefault();
		var originalNumber = parseInt($("#number").val());
		var factorialNumber = factorial(originalNumber);
		$("p").text(factorialNumber);
	});
});
