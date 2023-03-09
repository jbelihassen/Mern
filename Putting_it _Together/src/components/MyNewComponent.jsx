import React, { Component } from 'react';
    
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:"Doe",
            lastName:"jane",
            age:45,
            HairColor:"black"

        }
    }

    increaseByOne(){
        this.setState({
            age: this.state.age + 1

    });
    };

    render() {
        const { firstName, lastName, HairColor } = this.props;
        return (
            <div>
                 
                <h1> {firstName}, {lastName}</h1>
                <h2>age: {this.state.age}</h2>
                <h3>Hair Color:{HairColor}</h3>
                <br />
                <button onClick={()=>{this.increaseByOne()}}> Clicked Me {firstName} {lastName}</button>

            </div>
        );
    }
}
export default PersonCard;