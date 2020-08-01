/* Create a function that calculates the value of a number 
  -The number should be raised to a given power
  -Return its value 
*/

function mathPow(num, power) {
	let pow = 1;
	// loop exponent times
	for (let i = 0; i < power; i++) {
		//multiply the base value
		pow = pow * num;
	}
	console.log(pow);
}

mathPow(2, 8);
mathPow(3, 4);
