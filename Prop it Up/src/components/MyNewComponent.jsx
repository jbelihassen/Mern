import React, { Component } from 'react';
    
class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, HairColor } = this.props;
        return (
            <div>
                 
                <h1> {firstName}, {lastName}</h1>
                <h2>age: {age}</h2>
                <h3>Hair Color:{HairColor}</h3>

            </div>
        );
    }
}
export default PersonCard;