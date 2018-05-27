import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const env = require('env2')('env')
const API_KEY = process.env.API_KEY;
// Import components
import SearchBar from './components/search_bar'

class App extends Component {
constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'bts'}, videos => {
        this.setState({ videos });
    });
}

render(){
    return (
        <div>
            <SearchBar />
        </div>
        );
}    
}

ReactDOM.render(<App />, document.getElementById('root'));