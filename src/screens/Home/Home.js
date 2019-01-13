import React from 'react';
import { equals, gt, length } from 'ramda';
import styled from 'styled-components';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

import { getVideos } from '../../services';

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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0.5rem;
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
  justify-content: center;
  align-items: center;
  flex-basis: 400px;
`;

const VideoDetails = styled.section`
  flex-basis: ;
`;

export default class Home extends React.Component {
  state = { currentVideo: 0, videos: [] };

  async componentDidMount() {
    const videos = await getVideos();
    this.setState({ videos });
  }

  nextVideo = () => this.setState(prevState => ({ currentVideo: prevState.currentVideo + 1 }));

  prevVideo = () => this.setState(prevState => ({ currentVideo: prevState.currentVideo - 1 }));

  prevIsDisabled = () => !gt(this.state.currentVideo, 0);

  nextIsDisabled = () => equals(this.state.currentVideo + 1, length(this.state.videos));

  render() {
    const { currentVideo, videos } = this.state;
    const video = videos[currentVideo];

    if (video) {
      return (
        <Container>
          <VideoContainer>
            <Player playsInline poster={video.asset.poster} src={video.asset.url} />
          </VideoContainer>
          <Footer>
            <VideoDetails>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
            </VideoDetails>
            <NavigationControl>
              <Button type="button" onClick={this.prevVideo} disabled={this.prevIsDisabled()}>
                Prev Video
              </Button>
              <Button type="button" onClick={this.nextVideo} disabled={this.nextIsDisabled()}>
                Next Video
              </Button>
            </NavigationControl>
          </Footer>
        </Container>
      );
    }

    return null;
  }
}
