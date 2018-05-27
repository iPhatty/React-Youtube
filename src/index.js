import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const env = require('env2')('env')
const API_KEY = process.env.API_KEY;
// Import components
import SearchBar from './components/search_bar'

YTSearch({key: API_KEY, term: 'bts fake love'}, function(data){
    console.log(data);
});

class App extends Component {
constructor(props){
    super(props);

    this.state = { };
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