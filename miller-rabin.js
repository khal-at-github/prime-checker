// Miller-Rabin prime test
var getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var prime_test = function(n){
	if (n === 3){
		a=2;
	}
	else{
		a=getRandomIntInclusive(2,2*Math.round((Math.log(n))**2))
	}
	console.log(a)
	if (n === 2){
		return true
	}
	y=n-1	
	if ((a**(y))%n===1){
		while (y%2===0){
			y=y/2
			x=(a**y)%n
			if (x === n-1){
				return true
			}
			else{
				return false
			}
		}
	}
	else{
		return false}
};
