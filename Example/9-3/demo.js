function anotherMsg(){
	alert('I say the mouse cursor has entered the first div!');

}


window.onload = function(){
	let bodyEM = document.querySelector('body');
	bodyEM.addEventListener('click', function(){
		//Callback function:事件發生時才會把function叫回來執行
		//alert('Body is clicked');
	});
	let firstDiv = document.querySelector('div');
	firstDiv.addEventListener('mouseenter', anotherMsg);

	//let button = document.querySelector('button');
	let changeButton = document.getElementById('changeDiv');
	changeResetButton.addEventListener('click', function(){
		firstDiv.style.backgroundColor = 'red';
	});

	Let changeResetButton = document.getElementById('changeResetDiv1');
	changeResetButton.addEventListener('click', function(){
		firstDiv.class.toggle('gold');s
	});
	
		

};