console.log("JS connected"); // this to check that our script is connected to out HTML

var body = "";// query select body 
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
// change the backgroundColor to a color of your choice

var body = document.querySelector('body').style.fontFamily = "Arial, sans-serif" ;
var body = document.querySelector('body').style.color = "#FFF" ;
var body = document.querySelector('body').style.background = "#0e6283";
var body = document.querySelector('body').style.fontSize = "30px";
var h1 = document.querySelector('h1').style.textAlign = "center";
var h1 = document.querySelector('h1').style.background = "#000";



var nickname =  "";// qurey select the ID nickname
//add some value to nickname Hint: innerHTML

var nickname = document.querySelector('#nickname').innerHTML = "Abdulkarim" ;
var favorites = document.querySelector('#favorites').innerHTML = "Coding , Playing football , Traveling , and me" ;
var hometown = document.querySelector('#hometown').innerHTML = "California" ;

// query select favorites byID
// query select hometown byID
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

//change the color of all selectors to colors of your choice, it better be good LOL


// https://www.w3schools.com/jsref/prop_style_color.asp