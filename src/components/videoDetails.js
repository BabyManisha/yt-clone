import React from "react";

const VideoDetails = (props) => {
    let video = props.video;
    if(!video){
        return <div>Loading...</div>
    }
    video = JSON.parse(video);
    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;
    const {title, description} = video.snippet;


    return (
        <div className="video-details col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}

export default VideoDetails;