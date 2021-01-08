
console.log("Hello");
const container = document.getElementById('container');
let squares = [];

function addRow(){
    const div = document.createElement('div'); //create a div tag
    div.classList.add("square"); // add style to the div
    container.appendChild(div); // attach the div to the parent div
    squares.push(div);
}
function addColumn(){
    const div = document.createElement('div'); //create a div tag
    div.classList.add("square");// add style to the div
    div.style.float="left";
    container.appendChild(div); // attach the div to the parent div
    squares.push(div);
}