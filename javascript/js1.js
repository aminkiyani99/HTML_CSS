


// ######jalase aval:########
// var Name,LastName,number;
// Name="amin"
// LastName="kiyani"
// number="24"

// document.write(Name);
// console.log(Name,LastName,number)
// window.alert(Name);

// var a,b,c;
// a = 12;
// b = 8;
// // c = a-b;
// // c = a*b;
// // c = a/b;
// // c = a+b;
// c = a%b;


// document.write(c);

// // #######jalase 2: ########
// var number= 24; //number
// var number2=24;
// var name="amin"; //string
// var variable = " codeyad "+ 24;// multiple variable
// var person={ FirstName:"amin",LastName:"kiyani"}; //object




// var iscomplete=false;
// var isequal;

// isequal= (number == number2); //boolean

// document.write(isequal);

// ########### jalase 3:arrays: ########

// var names =new Array("amin", "ali", "reza", "mehdi", "mostafa");
// console.log(names [1]);

// var MyArray = ["ali", 24, true, "hoseini", 24.321312]
// console.log(MyArray)

// var colors = ["red", "blue", "black", "green", "white"];
// console.log(colors);
// // colors.reverse();
// // colors.shift();
// // colors.shift();
// // colors.unshift("purple");
// // colors.pop("pink");
// // colors.push("brown");
// // var NewColors = colors.slice();
// // var result = colors .indexOf("blue",0);
// var ArrayString = colors.join("-");
// console.log(ArrayString);

//#################### jalase4:if: ###########################

// var a,b;
// var isequal;
// a=4;
// b=3;

//             // if (a > b | a ==3 ) | be mani "or" va & be mani "and" 
// if(a > b & b == 3)
// {
//     isequal= true;
    
// }else
// {
//     isequal=false;

// }

// // a==b ? isequal=true : isequal=false;
// console.log("the equal match is: "+ isequal);

// ######################### jalase 5 :switch! #####################

// var today= new Date().getDay();
// var day;
// switch(today)
// {
//     case 0:
//         day="sunday"
//         break;
//     case 1:
//         day="monday"
//         break;
//     case 2:
//         day="tuesday"
//         break;
//     case 3:
//         day="wednsday"
//         break;
//     case 4:
//         day="thursday"
//         break;
//     case 5:
//         day="friday"
//         break;
//     case 6:
//         day="saturday"
//         break
//         default:
//             day="your value not found !!!"

// }
// document.write("today is: " + day)

// ########jalase 6: funtion1 ##########

// @@@@@@@@@@@@@ Named function @@@@@@@@@@@@@@@@@

// function findbiggestfraction(a , b)
// {

//     a>b ? console.log("a:"+a) : console.log("b:"+b);

// }

// var firstfraction = 3/4;
// var secondfraction = 5/8;


// console.log("the function is running!!! ");

// findbiggestfraction();

// ########### jalase 7: function2 ###################

// function findbiggestfraction(a,b)
// {
//     var result;
//     a>b ? result = ["firstfraction",a] : result = ["secondfraction",b] ;
//     return result;
// }

// // var newresult = findbiggestfraction(18/8, 20/5);
// // console.log(findbiggestfraction(18/8,20/5));

// var fractionresult= findbiggestfraction(12/3,12/6);

// console.log("fraction "+ fractionresult[0]+ " with a value ", +fractionresult[1] + " is the biggest ");


//  @@@@@@@@@@@ anonymous funtion @@@@@@@@@@@

// var thebiggest = function (a,b) {
//     var result;
//     a>b ? result = ["a", a] : result= ["b",b];
//     return result;
// }

// console.log(thebiggest(7/9,13/25));



// @@@@@@@@@@@@@@ immediatly invoked function @@@@@@@@@@@

// var thebiggest =( function (a,b) {
//     var result;
//     a>b ? result = ["a", a] : result= ["b",b];
//     return result;
// })(7/9,13/25);

// console.log(thebiggest);
