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

class Sensei extends Ninja{
    constructor (name,health,speed,strenght,wisdom=10){
        super (name,health ,speed ,strenght)
        this.wisdom = wisdom;
    }
    speakWisdom(){
        const message = super.drinSake();
        console.log (message);
    }
    
}

const superSensei = new Sensei("Master Splinter",200,10,10);
superSensei.speakWisdom();
superSensei.showStats();


