let body = document.querySelector("body");
let mode = document.querySelector("input");

let currmode = "light";

mode.addEventListener("click", () =>{
    if(currmode === "light") {
     currmode = "dark";
     body.classList.add("dark");
     body.classList.remove("light");
     //document.querySelector("body").style.backgroundColor = "black";
    } else if (currmode === "dark"){
     currmode = "light";
     body.classList.add("light");
     body.classList.remove("dark");
     //document.querySelector("body").style.backgroundColor = "white";
    }
    
    console.log(currmode);
 });