/**
 * Here is my submission. Please open the html document in chrome to test
 * Refresh the page to refresh the grid
 *
 */

var cols = 8;
var rows = 8;

//random colors array
var colors = [];
var hexColors = ['#FF6F61','#6B5B95','#88B04B','#F7CAC9','#92A8D1','#955251','#B565A7'];

//setup Canvas view
function setup(){
    createCanvas(675,675);
    //Sets a randomized grid
    for(var i = 0; i < cols; i++){
        colors[i] = [];
        for(var j = 0; j < rows; j++){
            //use a two dimensional array to store random hex codes
            colors[i][j] = hexColors[Math.floor(Math.random()*hexColors.length)];
        }
    }
    //This nested for loop will check if the grid is valid and recall the setup method until a valid state is present
    for(var i = 0; i < cols;i++){
        for(var j = 0; j < rows; j++){
            if(j < rows - 2){
                if(colors[i][j] == colors[i][j+1] && colors[i][j+1] == colors[i][j+2]){
                    setup();
                }
            }
            if(i < cols - 2){
                if(colors[i][j] == colors[i+1][j] && colors[i+1][j] == colors[i+2][j]){
                    setup();
                }
            }
        }   
    }
}

function draw(){
    for(var i =0; i < cols; i++){
        for(var j = 0; j < rows; j++){ 
            //create the coordinates for the box
            var x = i * 75;
            var y = j * 75;
            fill(colors[i][j])
            rect(x,y,75,75);
        }
    }
}





