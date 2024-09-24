const container = document.querySelector(".container");
const pickGridSizeBtn = document.querySelector("#pickGridSizeBtn");
const resetBtn = document.querySelector("#resetBtn");
function getRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function buildGrid(numberOfBoxs){
    container.innerHTML = "";
    for(let i = 1; i <= (numberOfBoxs*numberOfBoxs); i++){
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        container.appendChild(box);
        box.setAttribute("style", 
        `width:${600/numberOfBoxs}px;
        height:${600/numberOfBoxs}px;`);
    }
    let boxs = document.querySelectorAll(".box");
    for(let box of boxs){
        box.addEventListener("mouseenter", () => {
        box.setAttribute("style", `background-color:${getRandomColor()};
        width:${600/numberOfBoxs}px; height:${600/numberOfBoxs}px`)});
    }
}

buildGrid(16)
resetBtn.addEventListener("click", () => {buildGrid(16)});
pickGridSizeBtn.addEventListener("click", () => {
let numberOfBoxs = prompt("Enter the number of boxs in each row/column (Max 100)");
if(numberOfBoxs < 1 || isNaN(numberOfBoxs)
    || numberOfBoxs > 100){ alert("Invalid");

}else{
    buildGrid(numberOfBoxs);
}});