var numArray = [1,5,2,11,7];

console.log(numArray[0]); // Fist position
console.log(numArray[1]); // Second position

console.log(numArray[4]); //Last position
numArray[4] = 18;
console.log(numArray[4]); // Last position with a different value

console.log(numArray); //Entire array

var students = ['Tom', 'Mary', 'Victor', 'John'];

//Mixed type of data in an array; mot recommended though
var profile = ['Sophieee', "NTHU", 20, 157, 45]; //JavaScript可以接受陣列內有不同種的資料

console.log(profile[0]);

var name = 'Sophie', school ='NTHU', age =20;

var emptyObj ={}; //An empty object

var profile = {
	name: 'Sophie',
	age:20,
	school: 'NTHU',
	height: 157,
	weight:45

};

console.log(profile.name); //Get the "name" key
console.log(profile['name']); //Same

var key = 'name';
console.log(profile[key]) //取得不同欄位的資料
key = 'age';
console.log(profile[key]);

profile.name ='This is Sophie Chiao'; //Change the "name" key 
console.log(profile.name);

profile.gender ='Female'; //Add a new "gender" key
console.log(profile.gender)

delete profile.gender; //刪掉某個欄位 delete a key
console.log(profile.gender) //會變undefined

profile = {
	name: 'Sophie',
	age: 20,
	height: 157,
	weight: 45,
	contact:{
		home: 055519485,
		mobile: [0912887892, 12345678, 23456789],
		email: '@gmail.com'

	}
};
console.log(profile.contact.home);
console.log(profile.contact);

console.log(profile.contact.mobile[1]); //outcome:12345678

function printMsg(msg){
	console.log(msg);
}

function simpleCalc(x,y){
	console.log(x+y);
}
	var demoFuncs = {
		print: printMsg,
		calc: simpleCalc
	};
demoFuncs.print('Message printed!')



