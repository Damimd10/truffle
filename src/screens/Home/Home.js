import React from 'react';
import { pathOr } from 'ramda';
import { Route, withRouter } from 'react-router-dom';
import 'video-react/dist/video-react.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { getVideos } from '../../services';

import Video from './components/Video';

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

class Home extends React.Component {
  state = { videos: [] };

  async componentDidMount() {
    const videos = await getVideos();
    this.setState({ videos });
  }

  getVideoByUrl = url => {
    const { videos } = this.state;
    const index = videos.findIndex(video => video.url === url) || 0;

    return {
      data: videos[index],
      prevVideoUrl: pathOr('', [index - 1, 'url'], videos),
      nextVideoUrl: pathOr('', [index + 1, 'url'], videos),
    };
  };

  render() {
    return (
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={this.props.location.key}
            timeout={{ enter: 3000, exit: 300 }}
            classNames="fade"
          >
            <section className="route-section">
              <Route
                path="/:id"
                render={props => {
                  const url = props.match.params.id;
                  const video = this.getVideoByUrl(url);
                  return <Video {...props} video={video} />;
                }}
              />
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    );
  }
}

export default withRouter(Home);
