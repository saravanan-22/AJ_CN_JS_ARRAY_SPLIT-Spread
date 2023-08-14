let names = "jack , jack , prince";

let newArr = names.split(", ")((name) => {
  return { ...name, newname: "Arun" };
});
console.log(newArr);

const numbers = "John, John, Prince";
let split = numbers.split(", ").console.log(moreNumbers);
// let names = "jack , jack , prince";: 
// This line initializes a string variable names with the value "jack , jack , prince".
// let newArr = names.split(", ")
// ((name) => {...});: Here, you're trying to split the names string into an array using the delimiter ", " .
// (comma followed by a space). However, there's a mistake in the syntax. 
// The correct usage should involve the .map() function for transformation after the split.