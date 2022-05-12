import React, {Component} from 'react';


class PersonCard extends Component{
    
    constructor (props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    
    render(){

        const increaseAge = () => {
            // console.log("Creating functions outside the return statement works!");
            this.setState({age: this.state.age+1})
        }
        
        return (
            <>
                <div>
                    <h1> {this.props.lastName}, {this.props.firstName} </h1>
                    <h4> Age: {this.state.age}</h4>
                    <h4> Hair Color: {this.props.hairColor}</h4>
                    {/* <button onClick = {() => {console.log(`The button works for ${firstName} ${lastName}`)}}>
                            Birthday Button for {firstName} {lastName}
                        </button> */}
                    <button onClick = {increaseAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                </div>
            </>
        )
    }
}


export default PersonCard;





// Using class components:

// class PersonCard extends Component{
//     render(){
//         // all the JavaScript can be added here between the render and return keywords.
        
//         return (
//             // all of the html goes in here and is refered to as JSX. (only one parent can be defined in the return block).
//             <>
//             </>
//         )
//     }
// }

// export default PersonCard;