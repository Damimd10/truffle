import React from 'react';
import { shallow } from 'enzyme';

import Video from '../Video';

const props = {
  video: {
    data: {
      asset: {
        poster: 'poster-url',
        url: 'video-url',
      },
      title: 'Video title',
      description: 'Video description',
    },
    prevVideoUrl: 'prev-url',
    nextVideoUrl: 'next-url',
  },
};

describe('Video Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Video {...props} />);
  });

  describe('render', () => {
    it('should render a Fade component', () => expect(wrapper.find('Fade')).toHaveLength(1));

    it('should pass a duration prop of Fade component with 3000 as value', () =>
      expect(wrapper.find('Fade').prop('duration')).toEqual(3000));

    it('shopuld render a Container component', () =>
      expect(wrapper.find('Fade').find('Container')).toHaveLength(1));

    it('should render a VideoContainer component', () =>
      expect(wrapper.find('Container').find('VideoContainer')).toHaveLength(1));

    describe('Player Component', () => {
      let player;
      let fluid;
      let playsInline;
      let width;
      let height;
      let poster;
      let src;

      beforeEach(() => {
        player = wrapper.find('VideoContainer').find('Player');
        ({ fluid, playsInline, width, height, poster, src } = player.props());
      });

      it('should render one Player component', () => expect(player).toHaveLength(1));

      it('should pass fluid prop as false', () => expect(fluid).toBe(false));

      it('should pass playsInline prop as true', () => expect(playsInline).toBe(true));

      it('should pass width prop with 700 as value', () => expect(width).toBe(700));

      it('should pass height prop with 350 as value', () => expect(height).toBe(350));

      it('should pass poster prop with the poster url', () => expect(poster).toBe('poster-url'));

      it('should pass src prop with video url', () => expect(src).toBe('video-url'));
    });

    it('should render one Footer component', () =>
      expect(wrapper.find('Container').find('Footer')).toHaveLength(1));

    it('should render one VideoDetails component', () =>
      expect(wrapper.find('Footer').find('VideoDetails')).toHaveLength(1));

    it('should render one VideoTitle component', () =>
      expect(wrapper.find('VideoDetails').find('VideoTitle')).toHaveLength(1));

    it('should render "Video title" as text', () =>
      expect(wrapper.find('VideoTitle').text()).toBe('Video title'));

    it('should render one VideoDescription component', () =>
      expect(wrapper.find('VideoDetails').find('VideoDescription')).toHaveLength(1));

    it('should render "Video description" as text', () =>
      expect(wrapper.find('VideoDescription')).toHaveLength(1));

    it('should render one NavigationControl component', () =>
      expect(wrapper.find('NavigationControl')).toHaveLength(1));

    it('should pass prevUrl prop with "prev-url" as value', () =>
      expect(wrapper.find('NavigationControl').prop('prevUrl')).toBe('/prev-url'));

    it('should pass nextUrl prop with "next-url" as value', () =>
      expect(wrapper.find('NavigationControl').prop('nextUrl')).toBe('/next-url'));
  });
});
