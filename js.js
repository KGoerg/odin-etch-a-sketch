const container = document.querySelector("#container");
//Create squares, appended to the grid container div, with square size calculated by the inputted "gridSize".
function createSquares(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${900 / gridSize}px`;
        container.appendChild(square);
    }
    return console.log(`Grid size ${gridSize} created`);
};

createSquares(64);

//Creates "hover" effect over squares.
function hoverOver() {
    container.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "#b68ed1";
    });
};

hoverOver();

//Allows new grid to be created. Need to update this so it doesn't make a new grid within the existing grid.
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    let buttonInput = prompt("Please enter a grid size.")
    
    if (buttonInput >= 100) {
        alert("Please enter a grid size smaller than 100.");
    } else {
        createSquares(buttonInput);
    }
})