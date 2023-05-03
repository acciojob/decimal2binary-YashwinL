function binary(){
	let val = document.getElementById("deicmalNumber").value;

	let binarynumber="";

	while(val>0){
		var reminder = val%2;
		binarynumber = remainder + binarynumber;
		val = Math.Floor(val/2);
	}

	document.getElementById("binaryNumber").innerHTML = binarynumber;
}


module.exports = threeSum;
