import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../Home';
import { getVideos } from '../../../services';

jest.mock('../../../services', () => ({
  getVideos: jest.fn(),
}));

const props = {
  location: { key: '123' },
  match: { params: { id: '/some-url' } },
};

describe('Home Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  describe('render', () => {
    describe('when its loading', () => {
      beforeEach(() => {
        wrapper.setState({ loading: true, error: null });
      });
    });

    describe('when has an error', () => {
      beforeEach(() => {
        wrapper.setState({ error: 'Some Error', loading: false });
      });

      it('should render one ServiceError component', () =>
        expect(wrapper.find('ServiceError')).toHaveLength(1));
    });

    describe('when has videos', () => {
      beforeEach(() => {
        wrapper.setState({ error: null, loading: false });
      });

      describe('TransitionGroup Component', () => {
        let transitionGroup;

        beforeEach(() => {
          transitionGroup = wrapper.find('TransitionGroup');
        });

        it('should render just one transition group', () =>
          expect(transitionGroup).toHaveLength(1));

        it('should contain a className "transition-group"', () =>
          expect(transitionGroup.hasClass('transition-group')).toBe(true));
      });

      describe('CSS Transition Component', () => {
        let cssTransition;

        beforeEach(() => {
          cssTransition = wrapper.find('TransitionGroup').find('CSSTransition');
        });

        it('should render just one CSS Transition component', () =>
          expect(cssTransition).toHaveLength(1));

        it('should pass a timeout prop with enter and exit properties with 300 as value', () =>
          expect(cssTransition.prop('timeout')).toEqual({ enter: 3000, exit: 300 }));

        it('should pass a classNames prop with fade as value', () =>
          expect(cssTransition.prop('classNames')).toBe('fade'));
      });

      it('should render a section tag with "route-section" class name', () =>
        expect(wrapper.find('CSSTransition').find('section.route-section')).toHaveLength(1));
    });
  });

  describe('instances', () => {
    let instance;

    beforeEach(() => {
      instance = wrapper.instance();
    });

    describe('componentDidMount', () => {
      describe('when have a succesfull response', () => {
        const videos = [{ url: '/some-url' }];

        beforeEach(async () => {
          getVideos.mockReturnValue(videos);
          await instance.componentDidMount();
        });

        it('should have videos state fullfilled', () =>
          expect(wrapper.state('videos')).toEqual(videos));

        it('should have error state as null', () => expect(wrapper.state('error')).toBe(null));

        it('should have loading state as false', () =>
          expect(wrapper.state('loading')).toBe(false));
      });

      describe('when have error', () => {
        const videos = { error: 'Wroong!' };

        beforeEach(async () => {
          getVideos.mockReturnValue(videos);
          await instance.componentDidMount();
        });

        it('should have "Wroong!" as error state', () =>
          expect(wrapper.state('error')).toBe('Wroong!'));

        it('should have loading state as false', () =>
          expect(wrapper.state('loading')).toBe(false));

        it('should have an empty array in the videos state', () =>
          expect(wrapper.state('videos')).toEqual([]));
      });
    });

    describe('getVideoByUrl instance', () => {
      describe('when has prev video', () => {
        let result;

        beforeEach(() => {
          wrapper.setState({ videos: [{ url: '/prev-video' }, { url: '/some-url' }] });
          wrapper.update();

          result = instance.getVideoByUrl('/some-url');
        });

        it('should return an object with nextVideoUrl empty and the prevVideoUrl', () => {
          expect(result).toEqual({
            data: { url: '/some-url' },
            nextVideoUrl: '',
            prevVideoUrl: '/prev-video',
          });
        });
      });

      describe('when has next video', () => {
        let result;

        beforeEach(() => {
          wrapper.setState({ videos: [{ url: '/some-url' }, { url: '/next-video' }] });
          wrapper.update();

          result = instance.getVideoByUrl('/some-url');
        });

        it('should return an object with nextVideoUrl fullfilled and prevVideoUrl empty', () => {
          expect(result).toEqual({
            data: { url: '/some-url' },
            nextVideoUrl: '/next-video',
            prevVideoUrl: '',
          });
        });
      });

      describe('when has both', () => {
        let result;

        beforeEach(() => {
          wrapper.setState({
            videos: [{ url: '/prev-video' }, { url: '/some-url' }, { url: '/next-video' }],
          });
          wrapper.update();

          result = instance.getVideoByUrl('/some-url');
        });

        it('should return an object with next video and prev video fullfilled', () => {
          expect(result).toEqual({
            data: { url: '/some-url' },
            nextVideoUrl: '/next-video',
            prevVideoUrl: '/prev-video',
          });
        });
      });

      describe('when not match the url', () => {
        let result;

        beforeEach(() => {
          wrapper.setState({
            videos: [{ url: '/prev-video' }, { url: '/some-url' }, { url: '/next-video' }],
          });
          wrapper.update();

          result = instance.getVideoByUrl('/some-fake-url');
        });

        it('should have data as undefined', () => {
          expect(result.data).toBeUndefined();
        });
      });
    });
  });
});
