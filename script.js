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
const MAX_DIGITS = 14;

btn.forEach((bt) =>{
    bt.onclick = function() {
        // Don't add more digits if max length reached
        if (output.replace(/[^0-9]/g, "").length >= MAX_DIGITS && !isOperator(bt.innerText)) {
            return;
        }
        output += String(bt.innerText);
        display.innerText = formatNumber(output);
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
        display.innerText = output;
}

equal.onclick = compute;

function compute() {
    let a=0;
    let b=0;
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
        }
    }
    
    // Format the final result
    if (output.includes('.')) {
        // Handle decimal numbers
        output = String(parseFloat(output).toFixed(10).replace(/\.?0+$/, ''));
    }
    // Limit integer length
    if (output.length > MAX_DIGITS) {
        output = Number(output).toExponential(9);
    }
    display.innerText = formatNumber(output);
}

function formatNumber(num) {
    if (num === '') return '';
    // Format numbers but keep operators intact
    return num.replace(/\d+\.?\d*/g, match => {
        if (match.includes('.')) {
            return parseFloat(match).toString();
        }
        return parseInt(match).toLocaleString('en-US');
    });
}

function isOperator(char) {
    return ['+', '-', '×', '÷', '%', '√', '='].includes(char);
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