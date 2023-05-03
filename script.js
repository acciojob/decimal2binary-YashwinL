function binary(){
	let val = document.getElementById("decimalNumber").value;

	let binarynumber="";

	while(val>0){
		var reminder = val%2;
		binarynumber = remainder + binarynumber;
		val = Math.Floor(val/2);
	}

	console.log(binarynumber);
}


module.exports = threeSum;
