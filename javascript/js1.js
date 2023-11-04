


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

    // ######################### jalase 9 ############
    // @@@@@@@@ object 1 @@@@@@@@

    // var person={
    //     firstname:"amin",
    //     lastname:"kiyani",
    // }
    // var person2=new Object();

    // person2.age= 24;
    // person2.phoneNumber= 90255;
// var course={
//     title:"javascript",
//     teacher:"mohamad hashemi",
//     level:1,
//     isactive:true,
//     views:0,

//     updateviews:function(){
//         return ++course.views;
//     }
// }

//     console.log(course.views);
//     course.updateviews();
//     console.log(course.views);

   // ######################### jalase 10 ############
    // @@@@@@@@ object 2 @@@@@@@@

//     function Course(title,teacher,level,isactive,views,updateviews) {
//         this.title=title,
//         this.teacher=teacher,
//         this.level=level,
//         this.isactive=isactive,
//         this.views=views,
//         this.updateviews=function () {
//             return ++this.views;
            
//         }
//     }

// var course1= new Course("javascript","amin kiyani",1,true,0);
// console.log(course1);

// ########### jalase 11: for Loops ##########

// const cars=["bmw","benz","audi","ferarri","ford","lamborghini","cheverlet"]

// // console.log("the car brand is: "+ cars[0]);
// // console.log("the car brand is: "+ cars[1]);
// // console.log("the car brand is: "+ cars[2]);
// // console.log("the car brand is: "+ cars[3]);
// // console.log("the car brand is: "+ cars[4]);
// // console.log("the car brand is: "+ cars[5]);
// // console.log("the car brand is: "+ cars[6]);

// for ( let i=0; i<7; i++)
// {
//     console.log("the car brand is: "+ cars[i])
// }


// const cars=["bmw","benz","audi","ferarri","ford","lamborghini","cheverlet"]

// const car={name:"bmw x4", year:2018, color:"black", isABS:true}

// for (key in car) 
// {

//     console.log("for in: "+car[key]);
// }

// for (value of cars)
// {
//         console.log("for of: "+ value);
// }

// ### jalase 12 : while ######

// var i=0;
// while(i<=10){
//     console.log(i);
//     i++;

// }
// var i = 0;

// for(let i=0 ; i<10; i++)
// {
//     if(i==5)
//     {
//     continue;
//     }

//     if(i==8)
//     {
//         break;
//     }
//     console.log(i);
// }