// experimenting with dynamically creating just one div
// const gridTile = document.createElement("div");  
// gridTile.setAttribute("style", "height: 250px");
// document.getElementById("grid-container").appendChild(gridTile);

main();

function main() {
    document.getElementById("gridSizePrompt").addEventListener("click", getUserGridSize);

    // function prompts user for grid size returns "gridSize"
    // calls createGrid() if user input is a number between min (1) and max (100)
    function getUserGridSize() {
        let gridSize = prompt("How many squares per side would you like? Please choose a number between 1 and 100.", "16");
        console.log(gridSize); // check that user input is passed correctly to gridSize
        
        const min = 1;
        const max = 100;

        if (isNaN(gridSize) || gridSize < min || gridSize > max) {
            alert("You must input a number between 1 and 100. Please try again.");
        }

        else if (gridSize >= min || gridSize <= max) {
            createGrid();
        }  
    };

    function createGrid() {

    };
    
};

// BRAINSTORMING: 

// const i = gridSize;

    // for (i = 1; i <= 100; i++) {
        //call function that prompts user for i (grid is square, so height x width are the same #)
        //take user input (i) and create grid that is "i" tiles long and "i" tiles wide
        // do this by calling a function which creates 1 tile "i" times long and "i" times wide
        // should/can this be done using an array? create an array of divs??
        // can you give ids/classes to elements created dynamically with JS?
    // };

// function dynamically creates a grid "i" tiles long x "i" tiles wide
    // calls function that creates singular tile

// function creates singular tile