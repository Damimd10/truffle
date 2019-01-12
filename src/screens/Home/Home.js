import React from 'react';
import styled from 'styled-components';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

import { getVideos } from '../../services';

const Container = styled.section`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.section`
  width: 600px;
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
            <Player playsInline poster={video.poster} src={video.video} />
          </VideoContainer>
          <div>
            <div>
              <h1>{video.title}</h1>
              <p>{video.description}</p>
            </div>
            <div>
              <h4>Prev Video</h4>
              <h4>Next Video</h4>
            </div>
          </div>
        </Container>
      );
    }

    return null;
  }
}
