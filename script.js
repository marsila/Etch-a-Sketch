const container = document.querySelector(".container");

//const p = document.createElement("p");


//p.textContent = "Hi there";
//container.appendChild(p);
//console.log(p.textContent);


//let test = () => {
    for (let i = 0; i <256; i++) {
        const div = document.createElement("div");
        div.setAttribute("class","box");
        container.appendChild(div);        
    }
    console.log("inside the fun");
    
//}
//test();

