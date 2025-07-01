// Miller-Rabin prime test
import Math
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function prime_test(n):
	if n === 3:
		a=2
	else:
		a=getRandomIntInclusive(2,2*Math.round((Math.log(n))**2))	
	print(a)
	if n === 2:
		return True
	y=n-1	
	if (a**(y))%n===1:
		while y%2===0:
			y=y/2
			x=(a**y)%n
			if x === n-1:
				return True
			else: 
				return False
	else: 
		return False
