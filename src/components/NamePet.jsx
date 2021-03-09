import React, { Component } from 'react';



class NamePet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NamePet: ''
        }
    }

_handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}
_handleSubmit= (e) => {
    e.preventDefault();
    this.props.handleClick(this.state.NamePet);
    this.setState({
        NamePet: ''
    })
}  
render() {
    const { NamePet } = this.state;
    return (
            <form onSubmit={this._handleSubmit}>
            <label>
                Change Name
                <input type="text" name="NamePet" value={NamePet} onChange={this._handleChange} placeholder="Enter a Name"/>
            </label>
            <button type="submit">Change Name</button>
        </form>
        );
         }   
    }


export default NamePet;