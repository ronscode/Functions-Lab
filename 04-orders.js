// Write a function that calculates the ​total​ ​price​ of an order and prints it on the console. The function should receive one of the following products: ​coffee, coke, water, snacks​; and a ​quantity​ of the product. The ​prices​ for a single piece of each product are:

function calcOrder(item, qty) {
	let total = 0;
	switch (item) {
		case "coffee": {
			total = qty * 1.5;
			break;
		}
		case "water": {
			total = qty * 1;
			break;
		}
		case "coke": {
			total = qty * 1.4;
			break;
		}
		case "snacks": {
			total = qty * 2;
			break;
		}
	}
	console.log(total);
}

calcOrder("water", 5);
calcOrder("coffee", 2);
