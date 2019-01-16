import React from 'react';
import { shape, string } from 'prop-types';
import { Player } from 'video-react';
import Fade from 'react-reveal/Fade';
import HashLoader from 'react-spinners/HashLoader';

import NavigationControl from './components/NavigationControl';

import {
  Container,
  Footer,
  VideoContainer,
  VideoDescription,
  VideoDetails,
  VideoTitle,
} from './elements';

const Video = ({ video }) => {
  if (!video || !video.data)
    return (
      <Container background="transparent">
        <HashLoader sizeUnit="px" size={150} color="#4b5960" loading />
      </Container>
    );

  return (
    <Fade duration={3000}>
      <Container>
        <VideoContainer>
          <Player
            fluid={false}
            playsInline
            width={700}
            height={350}
            poster={video.data.asset.poster}
            src={video.data.asset.url}
          />
        </VideoContainer>
        <Footer>
          <VideoDetails>
            <VideoTitle>{video.data.title}</VideoTitle>
            <VideoDescription>{video.data.description}</VideoDescription>
          </VideoDetails>
          <NavigationControl
            prevUrl={`/${video.prevVideoUrl}`}
            nextUrl={`/${video.nextVideoUrl}`}
          />
        </Footer>
      </Container>
    </Fade>
  );
};

Video.propTypes = {
  video: shape({
    data: shape({
      title: string.isRequired,
      description: string.isRequired,
      asset: shape({
        url: string.isRequired,
        poster: string.isRequired,
      }),
    }).isRequired,
    prevVideoUrl: string.isRequired,
    nextVideoUrl: string.isRequired,
  }).isRequired,
};

export default Video;
