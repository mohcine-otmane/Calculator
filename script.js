let display = document.getElementById("disp");
let btn = document.querySelectorAll(".btn");
let output = "1";

btn.forEach((bt) =>{
    bt.onclick = function() {
        output += String(bt.innerText);
        console.log(output);
        display.innerText = output;
    }
    
});

