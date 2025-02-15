let buttons = document. getElementsByClassName("btn");
let display = document.getElementById("display");
let equal = document.getElementById("equal");
let clear   = document.getElementById("clear");


for(let i=0; i<buttons.length; i++){
    buttons [i] .addEventListener ("click", (e) => {
        display.value += e.target.innerText;

    });
}

equal.addEventListener("click", () => {
    let value = eval(display.value);
    display.value = value;
});

clear.addEventListener("click" , () => {
    display.value =""
})