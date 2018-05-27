import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            inputValue: '',
        };
    }

    // Input onChange event handler
    onInputChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render() {
        return (
            <input onChange={this.onInputChange} />
        );
    }

}

export default SearchBar;