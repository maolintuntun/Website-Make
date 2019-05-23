//write a function which takes a single number argument and returns the factorial of that number
function factorial(a){
	if(a===0){
       return 1;
	}
	var sum = 1;
	var number = 1;
	while(number<=a){
		sum = sum*number;
		number++;

	}
	
	return sum;
}

//write a function that replace"-" with "_" 
function kebabToSnake(str){
	var myString = str.replace(/-/g, "_");
	return myString;
}