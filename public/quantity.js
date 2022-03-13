let result1 = 1;
$(document).ready(function () {
  $("#btn-add1").click(function () {
    $("ol").append(`<div class='leftpane'><div class='row item-list'><div class='col'><div class='img-right-pane'><img src='/assets/img/Honey-glazedonionrings.jpg' alt='spagetti'></div></div><div class='col space-pane'><div class='info-head'>Honey-glazed onion rings</div><div class='info-para'>Seet vidalia onions, deep friend in beer batter, glazed with thyme honey</div><div class='text-amount'>Quantity : <span id='amount' class='order-amount'> ${result1} </span></div><div class='text-status'>Status : <span id='status' class='order-status'>Queue</span></div></div></div></div>`);
  });
});

//Add button 1
function add1() {
  var num = document.getElementById("text1").value;
  if (num > 0) {
    result1 = num;
  }
}

//Quantity button
//item 1
function increase1() {
  var textBox = document.getElementById("text1");
  textBox.value++;

}

function decrease1() {
  var textBox = document.getElementById("text1");
  if (textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  
//item 2
function increase2(){
  var textBox = document.getElementById("text2");
  textBox.value++;
  
}    

function decrease2(){
var textBox = document.getElementById("text2");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  
//item 3
function increase3(){
  var textBox = document.getElementById("text3");
  textBox.value++;
  
}    

function decrease3(){
var textBox = document.getElementById("text3");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  
//item 4
function increase4(){
  var textBox = document.getElementById("text4");
  textBox.value++;
  
}    

function decrease4(){
var textBox = document.getElementById("text4");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  
//item 5
function increase5(){
  var textBox = document.getElementById("text5");
  textBox.value++;
  
}    

function decrease5(){
var textBox = document.getElementById("text5");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  
//item 6
function increase6(){
  var textBox = document.getElementById("text6");
  textBox.value++;
  
}    

function decrease6(){
var textBox = document.getElementById("text6");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  
//item 7
function increase7(){
  var textBox = document.getElementById("text7");
  textBox.value++;
  
}    

function decrease7(){
var textBox = document.getElementById("text7");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}
//item 8
function increase8(){
  var textBox = document.getElementById("text8");
  textBox.value++;
  
}    

function decrease8(){
var textBox = document.getElementById("text8");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}    
//item 9
function increase9(){
  var textBox = document.getElementById("text9");
  textBox.value++;
  
}    

function decrease9(){
var textBox = document.getElementById("text9");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  
//item 10
function increase10(){
  var textBox = document.getElementById("text10");
  textBox.value++;
  
}    

function decrease10(){
var textBox = document.getElementById("text10");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  
//item 11
function increase11(){
  var textBox = document.getElementById("text11");
  textBox.value++;
  
}    

function decrease11(){
var textBox = document.getElementById("text11");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  
//item 12
function increase12(){
  var textBox = document.getElementById("text12");
  textBox.value++;
  
}    

function decrease12(){
var textBox = document.getElementById("text12");
  if(textBox.value > 1) {
    textBox.value--;
  } else {
    textBox.value = 1;
  }
}  