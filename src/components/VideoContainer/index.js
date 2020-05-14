import React from 'react';

import { Container } from './style';
import Button from '../Button';
import Title from '../Typography/Title';

const VideoContainer = ({ video }) => (
    <Container>
        <Title type="h3">
            Video over KidsAcademy
        </Title>

        <div className="vidcontainer">
        <video src={video.file.url} controls preload="metadata">
            Your browser does not support the video tag.
        </video>
        </div>
        <div className="buttons">
            <Button>Schrijf je direct in</Button>
            <Button>Leer meer over ons</Button>
        </div>
    </Container>
);

export default VideoContainer;
