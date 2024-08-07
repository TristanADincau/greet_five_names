// create a function called greet that
// takes a name parameter
// log a greeting to that name in the function
let nameArr = ["John", "Mary", "Jimbo", "Lisa", "Bort"];
nameArr.forEach(name => {
    greet(name);
});
function greet(name) {
    console.log(`hello, ${name}`);
};
//create a file called names.txt
//list 5 names csv format in that file
//run the greet.js script so that a greeting is said to all five names
module.exports = greet;