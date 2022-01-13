import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            age: this.props.age
        }
    }

    increaseAge = () =>{
        console.log("clicked");
        this.setState({
            age: this.state.age + 1
        })
        console.log(this.state.age)
    }
    render() {
        console.log(this.props);
        return(
        <fieldset>
        <legend>PersonCard.jsx</legend>

        <h1>{this.props.firstName},{this.props.lastName}</h1>
                <p>Age: {this.state.age} </p>
                <p>Hair Color:{this.props.hair_color}</p>
                <button onClick={ ()=> this.increaseAge()}>Birthday Button for {this.props.firstName}{this.props.lastName}</button>

        </fieldset>)
    }
    }

    
export default PersonCard;