function anotherMsg(){
	alert('I say the mouse cursor has entered the first div!');

}

window.onload = function(){
	let bodyEM = document.querySelector('body');//html只有一個body 
	bodyEM.addEventListener('click', function(){
		//Callback function:事件發生時才會把function叫回來執行
		//alert('Body is clicked');
	});
	let firstDiv = document.querySelector('div');
	firstDiv.addEventListener('mouseenter', anotherMsg);

	//let button = document.querySelector('button');
	//button.addEventListener('mouseenter', function(){
		//firstDiv.style.backgroundColor = 'red';
	//} )
	
	let changeButton = document.getElementById('changeDiv1');
	changeButton.addEventListener('click', function(){
		firstDiv.style.backgroundColor = 'red';
	});

	let changeResetButton = document.getElementById('changeResetDiv1');
	changeResetButton.addEventListener('click', function(){
		firstDiv.classList.toggle('pink');

	});
};