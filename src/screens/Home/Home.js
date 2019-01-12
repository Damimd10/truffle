import React from 'react';
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
  margin: 0.2rem;
`;

export default class Home extends React.Component {
  state = { videos: [] };

  async componentDidMount() {
    const videos = await getVideos();
    this.setState({ videos });
  }

  render() {
    console.log('HERE', this.state.videos);
    const video = this.state.videos[0];
    if (video) {
      return (
        <Container>
          <VideoContainer>
            <Player playsInline poster={video.asset.poster} src={video.asset.url} />
          </VideoContainer>
          <Footer>
            <div>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
            </div>
            <div>
              <h4>Prev Video</h4>
              <h4>Next Video</h4>
            </div>
          </Footer>
        </Container>
      );
    }

    return null;
  }
}
