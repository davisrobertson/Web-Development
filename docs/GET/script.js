$.get( "https://exchangeratesapi.io/api/latest?base=USD", function(data){
	console.log(data.rates);
});