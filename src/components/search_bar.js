import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            inputValue: '',
        };
    }

    // Input onChange event handler
    onInputChange = (event) => {
        this.setState({inputValue: event.target.value});
        this.props.onSearchChange(event.target.value);
    }

    render() {
        return (
            <div className="search-bar">
            <input 
            value={this.state.inputValue}
            onChange={this.onInputChange} />
            </div>
        );
    }

}

export default SearchBar;