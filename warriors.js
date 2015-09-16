// this is my usual line of comment

function Warrior(name, gender){
    this.name="name";
    this.gender="gender";
    this.level=1;
    this.weapon="wooden sword";
    this.power=Math.round(Math.random()*100);
    this.fight=function(){
        if(gender==="M"){var pronom="his"}else{var pronom="her"};
        console.log(name+" rushes to the arena with "+ pronom+" "+ this.weapon);
    }
    this.faceoff=function(opponent){
        if (opponent.power>this.power){
            console.log(opponent.name+" destroyed "+this.name+"!!")
        }
        if (opponent.power<=this.power){
            console.log(this.name+" won the fight against "+opponent.name+"!!")
        }
    }
}

