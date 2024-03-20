let display = document.getElementById("disp");
let btn = document.querySelectorAll(".btn");
let clear = document.getElementById("clear");

let output = "";

btn.forEach((bt) =>{
    bt.onclick = function() {
        output += String(bt.innerText);
        console.log(output);
        display.innerText = output;
    }
});

clear.onclick = function() {
    display.innerText = clear(output);
    
} ;

function manageInput() {

}

function clear(output) {
    output = output.slice(0,-1);
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