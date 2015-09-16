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
    
}