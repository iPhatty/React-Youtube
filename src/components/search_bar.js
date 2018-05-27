import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {}
    }

    // Input onChange event handler
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <input onChange={this.onInputChange} />
        );
    }

}

export default SearchBar;