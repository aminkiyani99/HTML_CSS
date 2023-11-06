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

const names=["mohamad", "ali", "amin", "reza", "nazanin"];


function CreateLiElement()
{
    for (const items of names) 
    {
        document.getElementsByClassName

    var node = document.createElement("li");
    var textnode = document.createTextNode(items);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    }
}

CreateLiElement();
document.getElementById("myList")
.style.color
 = "red";