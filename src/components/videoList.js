import React from "react";
import VideoListItem from "./videoListItem";

const VideoList = (props) => {
    return (
        <div>
            <ul className="col-md-4 list-group">
                { props.videos.map((v,i) => (<VideoListItem key={i} video={JSON.stringify(v)} />) ) }
            </ul>
        </div>
    )
}

export default VideoList;