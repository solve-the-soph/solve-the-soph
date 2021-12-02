//window: The entire browser window

var winWidth = window.innerWidth;
var windHeight = window.innerHeight;

console.log(winWidth);
console.log(windHeight);

//window.location.href = 'https://google.com'; //更改目前連線的網址，就不在demo網頁內了
//window.location.pathname = '/nosuchpath'; //因為沒有這個路徑，所以就會變成page not found

window.onload = function(){
	//alret('Website is ready!');//onload=架構（body跟body間的所有結構)都讀取完成。這個功能，讓我們確保我們是把所有架夠讀玩後才開使存取執行內容
	//window.document: The entire HTML document
	//document: The entire HTML document
	let siteTitle = document.title;
	console.log(document)

	let allDivs = document.getElementsByTagName('div');
	//console.log(allDivs.length); //就是3
	//console.log(allDivs[0])
	//console.log(allDivs[1].innerText) //裡頭的文字


	let emById = document.getElementById('div3');
	//console.log(emById.innerText)

	let classEms = document.getElementsByClassName('group 1');
	//console.log(classEms[0].innerText);

	let emBySelector = document. querySelector('div > p'); //First match only
	//console.log(emBySelector.innerText);

	let emsBySelector = document.querySelectorAll('div > p'); //All matched
	console.log(emsBySelector.length)

}; 