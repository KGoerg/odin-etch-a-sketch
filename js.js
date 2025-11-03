const container = document.querySelector("#container");

function createSquares() {
    for (i = 0; i < 16 * 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.style.height = "40px";
        square.style.width = "40px";
        square.style.border = "thin solid black";
    }
};

createSquares();

