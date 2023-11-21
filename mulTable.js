//Program to Display the Multiplication Table

var num = parseInt(8);
var range = parseInt(10);

for(let i = 1; i <= range; i++) {
    var res = i * num;
    console.log(num +" * "+ i + " = " + res);
}