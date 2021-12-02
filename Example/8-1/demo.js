function printMsg(msg){
	let finalMsg = 'Message: ' + msg;
	console.log(finalMsg);
}

//printMsg('Test!'); //把'Test'傳到msg的變數裡面
//printMsg('Another Test!')

function userMsg(name, msg){
	let finalMsg = name + ' says: ' + msg;
	console.log(finalMsg);
}

//userMsg('Victor', 'Surprise!');
//userMsg('Mary', 'I love Victor!');

function complexCalc(x,y){
	let result = 0;
	result = x * y;
	result = result / (x - y);
	result = result * y - x;
	return result; //在return
}

var calcResult = complexCalc(4, 6);
console.log(calcResult)
