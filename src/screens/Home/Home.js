import React from 'react';
import styled from 'styled-components';

import { getVideos } from '../../services';

const Container = styled.section`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class Home extends React.Component {
  async componentDidMount() {
    await getVideos();
  }

  render() {
    return (
      <Container>
        <div>video</div>
        <div>
          <div>
            <h1>title</h1>
            <p>description</p>
          </div>
          <div>
            <h4>Prev Video</h4>
            <h4>Next Video</h4>
          </div>
        </div>
      </Container>
    );
  }
}
