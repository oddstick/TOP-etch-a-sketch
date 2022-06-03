
main();

function main() {
    document.getElementById("gridSizePrompt").addEventListener("click", getUserGridSize);
    document.getElementById("startOver").addEventListener("click", startOver);
    // function prompts user for grid size returns "gridSize"
    // calls createGrid() if user input is a number between min (16) and max (100)
    function getUserGridSize() {
        let gridSize = prompt("How many squares per side would you like? Please choose a number between 16 and 100.", "16");
        // check that user input is passed correctly to gridSize
        // console.log("gridSize: " + gridSize); 

        const min = 16;
        const max = 100;

        if (isNaN(gridSize) || gridSize < min || gridSize > max) {
            alert("You must input a number between 16 and 100. Please try again.");
        }

        else if (gridSize >= min || gridSize <= max) {
            createGrid(gridSize);
            document.getElementById("gridSizePrompt").removeEventListener("click", getUserGridSize);
        }
    };

    function createGrid(gridSize) {

        for (let i = 0; i < (gridSize * gridSize); i++) {
            const container = document.getElementById("grid-container");
            const gridSquare = document.createElement("div");

            container.style.setProperty("--gridCols", gridSize);
            container.style.setProperty("--gridRows", gridSize);

            gridSquare.classList.add("grid-square");
            gridSquare.setAttribute("id", "each-square");

            gridSquare.addEventListener("mouseover", function () {
                gridSquare.style.backgroundColor = "black";
            })
            // for random rgb option: 
            // gridSquare.addEventListener("mouseover", function () {
            //     gridSquare.style.backgroundColor = random_rgba();
            // })

            container.appendChild(gridSquare);
            //check that correct # of divs are created:
            //console.log("Number of div nodes created:" + (document.getElementsByTagName("div").length - 1));
        }

    };

    function startOver() {
        window.location.reload();
    }

    //borrowed this from stack overflower--no way I was going to figure out the math on my own...
    //source: https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
    // function random_rgba() {
    //     var o = Math.round, r = Math.random, s = 255;
    //     return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    // }

};

