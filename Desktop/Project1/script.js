function multiply (a, b) {
return a * b;
}



function checkDriverAge(){
var age = prompt("Please enter your age!");
 
if(age < 18){
alert(  "You aren't allowed to drive");
}

else if (age ===18){
alert("It will be your 1st year for driving!");
}

else if (age > 18){
alert("ENjoy!");
}


}




 var database = [
{
username:"mohamed",
password:"Pas123",
},

{
username:"badawy",
password:"Pas1234 "
},


{
username:"user3",
password:"Pas12345 "
},

];





var newsfeed = [
{
username:"Mohamed",
timeline:"Post1 - Morocco news ",
},

{
username:"badawy",
timeline:"Post2 - Egypt news "
},

{
username:"user3",
timeline:"Post3 12 - Mroc news "

}

];


/*************************/


var obj1 = [
"Apple",
"a bilion"];

for (var i = 0; i <obj1.length; i++){
	console.log(obj1[i],i);
}



obj1.forEach(function(i){
	console.log("  -- > ",i);
});



// var array1 = ["BMW", "Suzuki", "Toyota"];

// array1.forEach(function(value, i){
// console.log("The Array value is ",value, "the index is ",i)
// });


/****** Get attribute ****/


var mb = document.getElementById("mb");
var text = document.getElementById("list");
var ul = document.querySelector("ul");


function createlistelement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(text.value));
	ul.appendChild(li);

}



mb.addEventListener("click", function () {
createlistelement();
});

text.addEventListener("keydown", function () {
console.log("Hello");

if(event.keyCode===13){
createlistelement();
}

});

