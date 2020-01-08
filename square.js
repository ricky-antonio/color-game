var difficulty = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var h1Display = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}


function setupModeButtons() {
    // mode button events
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            //difficulty = this.textContent === "Easy" ?  3 :  9;
            if (this.textContent === "Easy") {difficulty = 3}
            else if (this.textContent === "Medium") {difficulty = 6}
            else {difficulty = 9}
            
            reset();
        });
    }
}
function setupSquares() {
    for (var i = 0; i < squares.length; i++){
        // Add click listeners
        squares[i].addEventListener("click", function(){
            // Grab color of clicked square
            var squareColor = this.style.backgroundColor;
    
            // Compare to pickedColor
            if (squareColor === pickedColor) {
                messageDisplay.textContent = "Correct!!";
                changeColors(pickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
            }
        })
    };
}

function reset() {
    // Generate all new colors
    colors = genereateRandomColors(difficulty);

    // Pick a new random color from array
    pickedColor = pickRandColor();

    // Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    // Change colors of squares
    for (var i = 0; i < squares.length; i++){
       if(colors[i]){
        // Add initial colors to squares
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
       } else {
        squares[i].style.display = "none";
       }
        

    // Reset h1 color and button text
    h1Display.style.backgroundColor = "steelblue";
    
};
}



resetButton.addEventListener("click", function(){
    reset();
});



function changeColors(color) {
    // Loop through all squares
    for (var i = 0; i < squares.length; i++){
        // Change each color to match correct color
        squares[i].style.backgroundColor = color;
        h1Display.style.backgroundColor = color;
        
    }

    
}

function pickRandColor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
};

function genereateRandomColors (num) {
    // MAke an array
    var arr = [];

    // Add random colors to array
    for (var i = 0; i < num; i++)
    arr.push(randomColor()) ;
    // Return array
    return arr;
}

function randomColor() {
    //pick red
    var red = Math.floor(Math.random() * 256);
    // Pick green
    var green = Math.floor(Math.random() * 256);
    // Pick Blue
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}