//Single-line comment

/*Multi-line comment:
	When you have lots to say, you need this. Can take looots of notes.
	也可拿來測試程式碼，整段先某部分拿掉
*/

//console.log('This is an embeddedscript');

//A "code block" is defined with a pair of curly brackets{}
{
	//console.log('This message is from code block.');
}

//Variable 像裝資料的容器
var emptyVar; // A statement that creates a variable called "nothing"
console.log(emptyVar); // undefined

var num = 5; // A statement that creates a variable called "num" with a default numeric value。名字也不能用數字

//console.log(num);

var x = 10, y = 20, z = 40;//Create Multiple variables in one single statement

var x = 20;//Potential Error

x=25; //如果想把x改別的值，不要用上面那行因為有些瀏覽器會不知道到底是只改x還是要全部改成只剩x
console.log(x);

var name = 'Mike'; //Create a variable容器 with a string as its default value.
var anothername="John";//A pair of double-quotation marjs also works

x = 'This is a variable called x'; //Change the value of a different type of data ()但不建議這樣用
console.log(x) //P.S.Javascipt裡大小寫都有差超級重要