import React, {Component} from 'react';

class Subcontent extends Component{
    render (){
        return (
            <div>
                <p>Type: {this.props.animalType}</p>
                <p>Animal Name: {this.props.animalName}</p>
                <p>Animal Home: {this.props.animalHome}</p>
            </div>
        )
    }
}

export default Subcontent;