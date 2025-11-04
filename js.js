const container = document.querySelector("#container");

function createSquares(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
};

createSquares(16);

function hoverOver() {
    container.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "#b68ed1";
    });
};

hoverOver();