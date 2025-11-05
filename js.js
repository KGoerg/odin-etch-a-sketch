const container = document.querySelector("#container");
//Create squares, appended to the grid container div, with square size calculated by the inputted "gridSize".
function createSquares(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${850 / gridSize}px`;
        container.appendChild(square);
    }
    return console.log(`Grid size ${gridSize} created`);
};

createSquares(16);

//Creates "hover" effect over squares.
function hoverOver() {
    container.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = getRandomColor();
    });
};

hoverOver();

//Function to create random hexadecimal codes for colors
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

//Removes each "firstChild" in the DOM tree until there are no more children left, thus removing all square divs from the grid container.
function removeSquares(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

//Allows new grid to be created.
const gridButton = document.querySelector("#gridSelect");
gridButton.addEventListener("click", (event) => {
    let gridButtonInput = Number(window.prompt("Please enter a number less than 100.", ""));
    if (gridButtonInput >= 100) {
        alert("Please enter a number smaller than 100.");
    } else if (gridButtonInput <= 0 || gridButtonInput === null || isNaN(gridButtonInput)) {
        alert("Please enter a number larger than 0 and less than 100.");
    } else {
        removeSquares(container);
        createSquares(gridButtonInput);
    }
});

// May come back to the idea of making a reset button. Code idea started below...
const resetButton = document.querySelector("#resetButton");
// resetButton.addEventListener("click", (event) => {
//     container.removeEventListener("mouseover", (event));
// });
resetButton.disabled = true;