//Object Methods
var person = {
  name: "mohamed",
  age: 23,
};
var keys = Object.keys(person); // return an array of a given object keys ['name','age']

var values = Object.values(person); // return an array of a given object values ['mohamed',23]

var entries = Object.entries(person); //returns an array of a given object property [key, value] pairs, [['name','mohamed'],['age',23]]

Object.assign(target, source); //used to copy the values of all enumerable properties from one or more source objects to a target object.

Object.freeze(person); // freezes an object, preventing new properties from being added and existing properties from being removed or changed

//hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property.
console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("gender")); // Output: false

//2) Array Methods

var nums = [1, 2, 3, 4];
nums.pop(); // removes the last element from an array and returns that element.
nums.push(); //adds one or more elements to the end of an array and returns the new length of the array.
nums.map((el) => el * el); // Method creates a new array with the results of calling a provided function on every element in the array. [1,4,9,16]
nums.filter((el) => el % 2 === 0); //method creates a new array with all elements that pass the test implemented by the provided function[2,4]
nums.reduce((acc, num) => acc + num); //output:10 / method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
nums.indexOf(3); // output: 2 / method returns the first index at which a given element can be found in the array
nums.join(); // join all array elements into string
nums.shift(); // method removes first element
nums.unshift(); // method add new element at the beginning
nums.length(); // to get length of array

//Colsure
function person(name) {
  console.log(`your name ${name}`);

  function city(cityName) {
    console.log(`your name ${name} and your city is ${cityName}`);
  }
  return city;
}

var colsure = person("mo");
colsure("alex");

/* The closure allows the inner function to remember and access the variables and parameters of the outer function,
 even after the outer function has completed execution */
