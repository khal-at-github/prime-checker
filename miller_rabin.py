#Miller-Rabin prime test
import random as r
import numpy as np
def prime_test(n):
	if n == 3:
		a=2
	else:
		a=r.randrange(2,2*round((np.log(n))**2))	
	print(a)
	if n == 2:
		return True
	y=n-1	
	if (a**(y))%n==1:
		while y%2==0:
			y=y/2
			x=(a**y)%n
			if x == n-1:
				return True
			else: 
				return False
	else: 
		return False

