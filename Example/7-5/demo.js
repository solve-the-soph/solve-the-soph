//This is a code block
{
	var num =1; //A numeric variable
}
console.log(num); //那就會得到outcome=1

//This is another code block
{
	Let str = 'This is a string.';//A local variable created with 'let' 如果只會在這個code block用到，不會在其他地方用，那就用let當容器建立就好
	console.Log(str); //The target string.
}
console.log(str); //outcome:Error: str is undefined.

