//console.log("Hello World i am Learning JavaScript");

/*let a = 4;
console.log(typeof(a));
let b = 2020;
let sum = a + b;
console.log(sum);*/

/*var a = 100;
var b = 30;
var mul = a * b;
console.log(mul);*/

/*let a;
a = 33
var b;
b = 2222222
const pi = 3.14;
console.log(pi);*/

/*const pi = 3.14;
let radius = window.prompt("Enter Radius of Circle");
console.log(radius);
let circumference = 2*pi*radius;
console.log("The circumference is "+ circumference);
alert(circumference);*/

/*function sleep(){
    let name = "Tommy";
    let bread = "German Shephard";
    let age = window.prompt("Enter age of dog:");
    console.log(age);
    if (age>=15){
        console.log(name + " is vey old");
    }
    else {
        console.log(name + " is Young");
    }
}
sleep();*/

/*function bark(){
    console.log(age);
    
}
bark();
sleep();*/

document.getElementById("myBtn").onclick = function(){
    let radius = document.getElementById("myNumber").value;
    console.log(radius);
    const pi = 3.14;
    let circumference = 2 * pi * radius;
    //document.getElementsById("myLabel").innerHTML = circumference;
    document.getElementById("circumference").innerHTML ="The circumference of a circle" + circumference;
}    