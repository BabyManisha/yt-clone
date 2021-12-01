import React from "react";

const VideoListItem = (props) => {
    const video = JSON.parse(props.video);
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    {video.snippet.title}
                    {video.snippet.channelTitle}
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;