
class Ninja {
    constructor(name, health,) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
       console.log(`My name is ${this.name}`);         
    }
   
 
    showStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
       
    }
    drinSake(){
        this.strength+=10;
        console.log(`Strenght: ${this.strength}`);
        return this;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinSake();


