// alert('This is an alert!'); 這就是一個功能

function printMsg() {
	console.log('This is a message in the console');
}

printMsg();  //執行功能

var varFunction = function() {
	console.log('This is a function stored in a variable.');
};

varFunction();

//----------------------------------------------------

alwaysDoFirst(); //先呼叫function了，下面才定義。可以！因為Javascript會先把所有被定義的function放到最上面去跑

function alwaysDoFirst(){
	console.log('You call this function anywhere in the script!');

}

//callThisLater(); 測試說如果先讀再來定義，結果是會錯誤

var callThisLater = function(){
	console.log('You can only call this function after it is built.');

};

callThisLater();
