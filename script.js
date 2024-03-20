let display = document.getElementById("disp");
let btn = document.querySelectorAll(".btn");
let clr = document.getElementById("clear");
let equal = document.getElementById("equal");
let clrA = document.getElementById("clear-all");
let sqroot = document.getElementById("squareroot");

var equal_sound = new Audio('assets/equal.mp3');
var button_sound = new Audio('assets/button.mp3');




let output = "";
let opera = "";

btn.forEach((bt) =>{
    bt.onclick = function() {
        output += String(bt.innerText);
        console.log(output);
        display.innerText = output; 
        if(bt.innerText!="="){
            // button_sound.play();
        }  
    }
});

clr.onclick = function() {
    output = clear(output);
    display.innerText = output;
};

clrA.onclick = function() {
    output = "";
    display.innerText = output;
};

sqroot.onclick = function() {
        compute();
        output = String(Math.sqrt(parseFloat(output)));
        // console.log(output);
        display.innerText = output;
}

equal.onclick = compute;

function compute() {
    let a=0;
    let b=0;
    // equal_sound.play();
    for(let i=0;i<output.length;i++){
        
        if(output[i]=="+" || output[i]=="-" || output[i]=="×" || output[i]=="÷" || output[i]=="√" || output[i]=="%"){
            opera = output[i];
            
            if(opera=="+"){
                a = parseFloat(output.slice(0,i));
                b = parseFloat(output.slice(i+1,output.length));
                output = String(add(a,b));
            }
            if(opera=="-"){
                a = parseFloat(output.slice(0,i));
                b = parseFloat(output.slice(i+1,output.length));
                output = String(substract(a,b));
            }
            if(opera=="×"){
                a = parseFloat(output.slice(0,i));
                b = parseFloat(output.slice(i+1,output.length));
                output = String(multiply(a,b));
            }
            if(opera=="÷"){
                a = parseFloat(output.slice(0,i));
                b = parseFloat(output.slice(i+1,output.length));
                output = String(divide(a,b));
            }
            if(opera=="%"){
                a = parseFloat(output.slice(0,i));
                b = parseFloat(output.slice(i+1,output.length));
                output = String(reminder(a,b));
            }
            // else{
            //     if(opera=="√"){
            //     a = parseFloat(output.slice(i+1,output.length));
            //     output = String(Math.sqrt(a));
            //     console.log(output);
            //     // display.innerText = output;
            // }
            // }
            
            
        }
    }
    display.innerText = output;
}

function manageInput() {

}

function clear(output) {
    return output.slice(0,-1);
}

function clearAll() {
    
}

function add(a,b) {
    return a+b;
}
function substract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
function reminder(a,b){
    return a%b;
}