// Write a function that receives a grade a grade between 2.00 and 6.00 and prints the corresponding grade in words
//grades(3.3);

grades(3.3);

let grades = function (grade) {
	if (grade >= 2.0 && grade <= 2.99) {
		console.log("Fail");
	} else if (grade >= 3.0 && grade <= 3.49) {
		console.log("Poor");
	} else if (grade >= 3.5 && grade <= 4.49) {
		console.log("Good");
	} else if (grade >= 4.5 && grade <= 5.49) {
		console.log("Very Good");
	} else if (grade >= 5.5 && grade <= 6.0) {
		console.log("Excellent");
	} else {
		console.log("Please enter a valide grade.");
	}
};

grades(4.5);
// grades(2.99);
// grades(6.8);
// grades(1);
