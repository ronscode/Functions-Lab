// Write a function that receives a ​string ​and a ​repeat​ ​count​ ​n​. The function should return a new string (the old one repeated ​n​ times).

function repeatString(string, numRepeat) {
	let newStr = "";
	for (i = 0; i < numRepeat; i++) {
		newStr += string;
	}
	console.log(newStr);
}
repeatString("abc", 3);

repeatString("String", 2);
