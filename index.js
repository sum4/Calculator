var Input1=document.getElementById("input")
var Input2=document.getElementById("input2")
var Output=document.getElementById("result")
function add(){
    var a = parseInt(Input1.value)
    var b =parseInt (Input2.value)
    var c = a+b;
    console.log(c);
    Output.innerHTML="Result :"+c
}
function subtract(){
    var a = parseInt(Input1.value)
    var b =parseInt (Input2.value)
    var c = a-b;
    console.log(c);
    Output.innerHTML="Result :"+c
}
function multiply(){
    var a = parseInt(Input1.value)
    var b =parseInt (Input2.value)
    var c = a*b;
    console.log(c);
    Output.innerHTML="Result :"+c
}
function divide(){
    var a = parseInt(Input1.value)
    var b =parseInt (Input2.value)
    var c = a/b;
    console.log(c);
    Output.innerHTML="Result :"+c
}