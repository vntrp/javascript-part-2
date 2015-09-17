// usual comment again

function Tile(x,y){
    this.x=x;
    this.y=y;
    this.height=Math.ceil(Math.random()*3);
    this.type=function(){
        var tp=["grass", "rocks", "water"]
        console.log(tp[Math.floor(Math.random()*3)]);
    }
    this.condition=function(){
        var cdt=["burning", "normal", "frozen"]
        console.log(cdt[Math.floor(Math.random()*3)]);
    }
    this.freeze=function(){
        if (this.condition==="burning"){
            this.condition="normal";
        }
        if (this.condition==="normal"){
            this.condition="frozen";
        }
        if (this.condition==="frozen"){
            this.height+this.height+1;
        }
    }
    this.burn=function(){
        if (this.condition==="frozen"){
            this.condition="normal";
        }
        if (this.condition==="normal"){
            this.condition="burning";
        }
        if (this.condition==="frozen"){
            if(this.height>0){
                this.height+this.height-1;
            }
            else this.height=0;
        }
    }
    
}

/* function my2DArray( rows, cols){

  var arr = [];

  // Creates all lines:
  for(var i=0; i < rows; i++){

      // Creates an empty line
      arr.push([]);

      // Adds cols to the empty line:
      arr[i].push( new Array(cols));

      for(var j=0; j < cols; j++){
        // Initializes:
        arr[i][j] = new Tile(i,j).height;
      }
  }

return arr;
}


var x = new Array(20);
for (var i = 0; i < 20; i++) {
  x[i] = new Array(20);
  //for(var j=0; j < 20; j++){
    //  x[i][j]=new Tile(i,j).height;
 // }
}

x[2][3]=45
*/


var my2DArray = [];
for (var i = 0; i < 20; i++) {
    my2DArray[i] = [];
    for (var j = 0; j <= 20; j++) {
    my2DArray[i][j] = new Tile(i, j);
    }
}


function displayIcons() {
for (var i = 0; i < 20; i++) {
    var tileDisplay = [];
    for (var j=0; j < 20; j++) {
        tileDisplay.push(my2DArray[i][j].height);
    }
    console.log(tileDisplay);
}
}

displayIcons();


