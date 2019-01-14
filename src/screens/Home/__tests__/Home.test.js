import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../Home';

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
    it.skip('should render a styled.div component', () =>
      expect(wrapper.find('Wrapper')).toHaveLength(1));

    describe('TransitionGroup Component', () => {
      let transitionGroup;

      beforeEach(() => {
        transitionGroup = wrapper.find('TransitionGroup');
      });

      it('should render just one transition group', () => expect(transitionGroup).toHaveLength(1));

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

    describe('Route Component', () => {
      let route;

      beforeEach(() => {
        route = wrapper.find('section').find('Route');
        route.prop('render')(props);
      });

      it('should render a Route component', () => expect(route).toHaveLength(1));
    });
  });
});
