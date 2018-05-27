import React from 'react';
import ReactDOM from 'react-dom';
const env = require('env2')('env')

// Import components
import SearchBar from './components/search_bar'

const API_KEY = process.env.API_KEY;

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));