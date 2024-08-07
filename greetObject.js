const greet = require(`./greet.js`);
const goodbye = require(`./goodbye.js`);
const nameObj = {
    name1: "john",
    name2: "mary",
    name3: "jimbo",
    name4: "lisa",
    name5: "bort",
}
const nameObj2 = {
    name1: "josh",
    name2: "martin",
    name3: "joe",
    name4: "linzy",
    name5: "berry",
}


function saluteNames(obj) {
    for (let name in obj) {
        greet(obj[name]);
        goodbye(obj[name]);
    }
}
saluteNames(nameObj);
saluteNames(nameObj2);