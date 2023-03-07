
class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }

 
}


class Effect extends Card{
    constructor(name,cost,magnitude){
        super (name,cost)
        this.magnitude=magnitude;
    }
    Hardalgorithm( ) {
         
        this.res +=3
        console.log(`increase target's resilience by 3, new resilience = ${this.res}`)
    }
    Unhandled_Promise_Rejection(target){
        target.res-=2;
        target.magnitude-=2;
        console.log(`the call of this function will reduce ${this.res} and ${this.magnitude}`);
    }
    Pair_Programming(target){
        target.power+=2;
        target.magnitude+=2;
    }
}






class Unit extends Card{
    constructor(name,cost,power,res){
        super (name,cost)
        this.power=power;
        this.res=res;
    }
    attack_unit(target) {
        target.res-=this.power;
        //power=power-20;
        console.log(`attack reduces power to ${this.power} and resilience to ${this.res}`);
}
}


const unit1 = new Unit("red belt ninja",3,3,4);
const unit2 = new Unit("black belt ninja",4,5,4);
const effect1 = new Effect("hard algorithm",2,3)
const effect2=new Effect("unhandled promise rejection",3,2);
const effect3 = new Effect("Pair programming",3,2);

unit1.attack_unit(unit2);
unit2.attack_unit(unit1);
effect1.Hardalgorithm(unit1);
effect2.Unhandled_Promise_Rejection(unit2);
effect3.Pair_Programming(unit1);
