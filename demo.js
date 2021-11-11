var numArray = [1,5,2,11,7];

console.log(numArray[0]); // Fist position
console.log(numArray[1]); // Second position

console.log(numArray[4]); //Last position
numArray[4] = 18;
console.log(numArray[4]); // Last position with a different value

console.log(numArray); //Entire array

var students = ['Tom', 'Mary', 'Victor', 'John'];

//Mixed types of data in an array recommended
var profile = ['TY Chen', 'NTHU', 40, 180, 72]

console.log(profile[0])

//ver name = 'TY Chen ', affiliation = 'NTHU', age = 40;
ver emptyObj = {}; // An empty object

var profile = {
	name: 'TY Chen',
	age:39
	affiliation: 'NTHU',
	height: 180,
	weight:72
};

console.log(profile.name); //Get the value of the "name"
console.log(profile['name']);//Same