const namesArr = ["john", "mary", "jimbo", "lisa", "bort"];
const namesArr2 = ["joe", "stephany", "johnny", "tony"];
// for (let i = 0; i < namesArr.legth - 1; i++); {
//     console.log(`Hello, ${namesArr[i]}`);
// }

function greetNames(arr) {
    arr.forEach((name) => {
        console.log(`Hello, ${name}`);
    })
}
// greetNames(namesArr);
// greetNames(namesArr2);
global.namesArr = namesArr;
global.namesArr2 = namesArr2;
global.greetNames = greetNames;