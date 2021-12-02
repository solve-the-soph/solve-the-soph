window.onload = function(){
	//Mixing jQuery codes with Javascript codes
	let ps = $('body > p');
	console.log(ps[0]);

	//Get the last element in Javascript and jQuery
	let psJS = document.querySelectorAll('body > p');
	let emLengthJS = psJS.length;
	let lastPos = emLength - 1; //陣列最後一個位子的數字永遠是長度-1，這樣就能取出最後一個元件了

	console.log(psJS[lastPosJS]);

	//jQuery
	let psJQ = $('body > p');
	//console.log(psJQ.eq(-1)); //eq=equivalent -1就是倒數第一個資料，-2就是倒數第二筆...
	//console.log(psJQ.eq(0));//第一個元件

	//Get HTML from an element: innerHTML vs. html()
	console.log(psJS[lastPosJS].innerHTML); //Javascript打法
	console.log(psJQ.eq(-1).html());// jQuery
//Mixing jQuery with Javascript = 'undefined'
//Change the HTML contents of an element
psJS[lastPosJS].innerHTML = 'Content Changed'; //Javascript
psJQ.eq(-1).html('Content Changed!'); // jQuery
};