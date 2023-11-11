// #############3jalase 13: DOM and BOM ##########

// document.getElementById("test").innerHTML="Hello DOM ";

// const element = document.getElementById("test");
// // element.innerHTML="Hello DOM 2";
// element.innerHTML="Date: " + Date();


// let x = 5;
// let y = 10;
// let
 
// z
//  = x + y;
// alert
// (z);

// <button 
// onclick
// ="alert('Hello')">Click me.</button>

// ###########3 jalase 19: add element to DOM ########

// const names=["mohamad", "ali", "amin", "reza", "nazanin"];


// function CreateLiElement()
// {
//     for (const items of names) 
//     {
//         document.getElementsByClassName

//     var node = document.createElement("li");
//     var textnode = document.createTextNode(items);
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);

//     }
// }

// CreateLiElement();
// document.getElementById("myList")
// .style.color
//  = "red";

// ######## jalase 20 - دسترسی و تغییر inline CSS در DOM ###############



// const DIV = document.getElementById("demo");
// DIV.onmouseover= function(){
//     document.getElementById("demo")
//     DIV.style.backgroundColor="blue"
// }
// DIV.onmouseout= function(){
//     document.getElementById("demo")
//     DIV.style.backgroundColor="black"
// }

// ################ jalase 23 v 24: event listeners ##############

// const ELEMENT= document.getElementById("mybtn");
// ELEMENT.addEventListener('click', displayDate);

// function displayDate()
// {
//     document.getElementById("test").innerHTML=Date();

// }

// let p1=12;
// let p2 = 8;
// const ELEMENT= document.getElementById("mybtn");

// ELEMENT.addEventListener('click',function() {
//     myfunction(p1,p2);
// });
// // ELEMENT.addEventListener('click',otherfunction);

// function myfunction(a,b){
//     document.getElementById("test").innerHTML=a*b;
// }
// // function otherfunction(){
// //     alert("other function happened");
// // }

// 
// 
// 
 
const DIV1= document.getElementById("myDiv");
const p1= document.getElementById("myP1");
const ButtonElement = document.getElementById("myBtn");
// DIV1.addEventListener('click', function(){
//     alert("you clicked on DIV");
// },true);

// p1.addEventListener('click', function(){
//     alert("you clicked on p");
// },true);
// buttonElement.addEventListener("click",RemoveEventFromDiv);

// ButtonElement.addEventListener("click",RemoveEventFromDiv);


// DIV1.addEventListener('mousemove', randomNumber);

// function RemoveEventFromDiv(){
//     DIV1.removeEventListener('mousemove',randomNumber);

// }


// function randomNumber(){
//     document.getElementById("test").innerHTML=Math.random();
// }
