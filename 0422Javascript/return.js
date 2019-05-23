function capitalize(str){
	if(typeof str === "number"){
		return "that is not a string!"
	}
	return str.charAt(0).toUpperCase() + str.slice(1) ;
}

var city = "paris";   //"paris"
var capital = capitalize(city); //"Paris"

var num = 37;
var capital = capitalize(num); //"that's not a string!"