function changeDivCSS(){
	console.log(this.id)
	let buttonId = this.id;
	let divs = document.getElementsByTagName('div');
	if(buttonId === 'changeDiv1'){
		divs[0].style.cssText = 'background-color:red; width: 100px; height: 40px;';
	}
	else if{ buttonId === 'changeDiv2'{
		divs[1].stle.cssText ='background-color:red; width: 60px; height: 150px;';
	}
	else{
		divs[2].stle.cssText ='background-color:gold; width: 200px; height: 200px;';
	}

};

window.onload = function(){
	If (true){
		alert('true!');
	}
	else {
		alert('false!')
	}
};
//Real conditions
if(1 === 1) {
	alert('true!');
}
	else{
		alert('flase!');

	/*else is optional */
	//!== means 'not equivalent to'是不是不等於//
	if(1 !== 2){
		//alert('true!');
		}

		if(2 === 1){
			alert('condition 1 is true!');
		}
		else if ('a' === 'b'){
			alert('Consition 2 is true!');
		else{
			alert('Neither is true QQ.');
		}

		if (2 === 2 && 15 === 10){ // && means AND
			alert('Condition 1 is true.')
		}

		else if (2 === 2 || 15 === 10){// || means OR
			alert('Condition 2 is true.');
		}
		else {
			alert('Neither is true.')
		}
	}

document.getElementById('changeDiv1').addEventListener('click', changeDivCSS); //callback function不能加小瓜好
document.getElementById('changeDiv2').addEventListener('click', changeDivCSS);
document.getElementById('changeDiv3').addEventListener('click', changeDivCSS);




};