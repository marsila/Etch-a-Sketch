const container = document.querySelector(".container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
const btn = document.createElement("button");


btn.textContent = "Your Grid";
btn.classList.add("btn");
container.appendChild(btn);
container.appendChild(gridContainer);

btn.addEventListener('click',()=> {
    gridContainer.textContent='';
    const userGrid = prompt("Chose the length of your gride! No more than 100 !");
    const gridLength = Number(userGrid);
    console.log(`gridLength = ${gridLength}`);
    if (gridLength > 100){
        gridContainer.textContent = `please enter a number less than 100`;
    } else {
        creatGrid(gridLength);
    } 
});


function creatGrid(gridLength) {
    gridContainer.style.display='grid';
    gridContainer.style.gridTemplateColumns =`repeat(${gridLength}, 1fr)` ;
    const totalSize = gridLength * gridLength;
    for (let i = 0; i < totalSize; i++) {
        const box = document.createElement("span");
        box.setAttribute("class","box");
        box.textContent=' ';
        gridContainer.appendChild(box);        
    }
} 
gridContainer.addEventListener('mousedown',(e)=>{
    if (e.target.tagName ==='SPAN'){
        const CellOpacity = Math.random();
        console.log(`CellOpacity : ${CellOpacity.toFixed(2)}`);
        e.target.style.opacity = CellOpacity.toFixed(2)
        e.target.classList.toggle("etch");
        
    }
})





    
    



