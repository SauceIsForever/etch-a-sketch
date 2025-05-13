const container = document.querySelector(".container");

function myGrid(){
    for (x=0; x < 256; x++){
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
        square.addEventListener('mouseover',  e => e.target.classList.add('newColor'))
    }
}

function main(){
  myGrid();
  //Add to have a pop-up when button is click to ask for grid size
  //Potentially add event listener
}

main();