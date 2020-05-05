import React from 'react';

import { Container } from './style';

const VideoContainer = ({ video }) => {
    console.log(video.file.url);
    return (
        <Container>
            <video src={video.file.url} controls preload="metadata">
                Your browser does not support the video tag.
            </video>
        </Container>
    );
};

export default VideoContainer;
