import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";
import VideoDetails from "./components/videoDetails";

const API_KEY = "AIzaSyASluQckxHs9_8HZr4xt8Lf1jKKWrEAt5Y";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: []
        }

        YTSearch({key: API_KEY, term: 'lord siva'}, (videos) => {
            console.log(videos)
            this.setState({videos})
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
                
                <VideoDetails video={this.state.videos[0] ? JSON.stringify(this.state.videos[0]) : ''} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));