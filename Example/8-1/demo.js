function printMsg(msg) { //小括號裡能放收到的資料
	let finalMsg = 'Message: ' + msg;
	console.log(finalMsg);
}

printMsg('Test!'); //把字串傳過去，會傳到小括號的msg裏面
printMsg('Another Test!');

function userMsg(name, msg){
	let finalMsg = name + ' says: ' + msg;
	console.log(finalMsg)
}
userMsg('Victor', 'Surprise!');
userMsg('Mary', 'I Love Victor!');


function Sophsays(day, msg){
	let Soph = day + ' says ' + msg;
	console.log(Soph);
}
Sophsays('Monday', 'hiiii');
Sophsays('Sunday', 'Gotta study baby!');