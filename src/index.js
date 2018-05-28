import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const env = require('env2')('env')
const API_KEY = process.env.API_KEY;
// Import components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {
constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null,
     };

    this.videoSearch('bts');
}

videoSearch (searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, videos => {
        this.setState({ 
            videos, 
            selectedVideo: videos[0]
        });
    });
}

render(){
    return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos} />
        </div>
        );
}    
}

ReactDOM.render(<App />, document.getElementById('root'));