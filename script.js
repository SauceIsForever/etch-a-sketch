//var div = document.createElement("div");
//div.style.width = "100px";
//div.style.height = "100px";
//document.getElementById("containerOne").appendChild(div);

const container = document.querySelector(".container");

function myGrid(){
    for (x=0; x < 256; x++){
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }
}

myGrid();