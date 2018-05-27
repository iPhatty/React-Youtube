import React from 'react';
import ReactDOM from 'react-dom';
const env = require('env2')('env')

const API_KEY = process.env.API_KEY;

const App = () => {
    return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));