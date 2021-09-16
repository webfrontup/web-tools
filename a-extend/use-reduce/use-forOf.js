
// for of 语法跳出

let iterable = [10, 20, 30];

for (let value of iterable) {
    if(value > 10){
        break
    }   
    console.log(value);
}