const container = document.querySelector(".container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
const btn = document.createElement("button");


btn.textContent = "Your Grid";
btn.classList.add("btn");
container.appendChild(btn);
container.appendChild(gridContainer);
//console.log(p.textContent);


//let test = () => {
    for (let i = 0; i <256; i++) {
        const div = document.createElement("div");
        div.setAttribute("class","box");
        gridContainer.appendChild(div);        
    }
    console.log("inside the fun");
    
//}
//test();

