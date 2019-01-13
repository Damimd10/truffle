import React from 'react';
import { isEmpty } from 'ramda';
import { Player } from 'video-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Container = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  font-family: 'Lato', sans-serif;
  background-color: #f9f9f9;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  margin: 0 auto;
`;

const VideoTitle = styled.span`
  color: #2a3438;
  font-weight: bold;
  font-size: 1.3rem;
`;

const VideoDescription = styled.p`
  color: #84898b;
  font-size: 0.8rem;
`;

const VideoContainer = styled.section`
  width: 700px;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #30393c;
  color: #fff;
  border-radius: 5px;
  height: 25px;
  padding: 0 20px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: default;
    background-color: #797e80;
  }
`;

const NavigationControl = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 500px;
`;

const VideoDetails = styled.section`
  padding: 1rem 0.5rem;
`;

const Video = ({ video }) => {
  if (!video || !video.data) return null;

  return (
    <Fade duration={3000}>
      <Container>
        <VideoContainer>
          <Player playsInline poster={video.data.asset.poster} src={video.data.asset.url} />
        </VideoContainer>
        <Footer>
          <VideoDetails>
            <VideoTitle>{video.data.title}</VideoTitle>
            <VideoDescription>{video.data.description}</VideoDescription>
          </VideoDetails>
          <NavigationControl>
            <Link to={`/${video.prevVideoUrl}`}>
              <Button type="button" disabled={isEmpty(video.prevVideoUrl)}>
                Prev Video
              </Button>
            </Link>
            <Link to={`/${video.nextVideoUrl}`}>
              <Button type="button" disabled={isEmpty(video.nextVideoUrl)}>
                Next Video
              </Button>
            </Link>
          </NavigationControl>
        </Footer>
      </Container>
    </Fade>
  );
};

export default Video;
