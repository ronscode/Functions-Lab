// Write a function that receives a ​string ​and a ​repeat​ ​count​ ​n​. The function should return a new string (the old one repeated ​n​ times).

function repeatString(aString, repeatNum) {
	let newStr = "";
	for (i = 0; i < repeatNum; i++) {
		newStr += aString;
	}
	console.log(newStr);
}

repeatString("abc", 3);
