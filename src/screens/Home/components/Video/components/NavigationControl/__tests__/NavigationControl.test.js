import React from 'react';
import { shallow } from 'enzyme';

import NavigationControl from '../NavigationControl';

const props = {
  prevUrl: '/prev-url',
  nextUrl: '/next-url',
};

describe('NavigationControl Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationControl {...props} />);
  });

  it('should render a NavigationControlContainer', () =>
    expect(wrapper.find('NavigationControlContainer')).toHaveLength(1));

  it('should render two Link components', () => expect(wrapper.find('Link')).toHaveLength(2));

  it('should pass prevUrl as prop in the first Link', () =>
    expect(
      wrapper
        .find('Link')
        .at(0)
        .prop('to'),
    ).toBe('/prev-url'));

  it('should pass nextUrl as prop in the second Link', () =>
    expect(
      wrapper
        .find('Link')
        .at(1)
        .prop('to'),
    ).toBe('/next-url'));

  it('should render two Button components', () => expect(wrapper.find('Button')).toHaveLength(2));

  it('should pass type prop in the first Button', () =>
    expect(
      wrapper
        .find('Button')
        .at(0)
        .prop('type'),
    ).toBe('button'));

  it('should pass a disabled prop as false in the first Button', () =>
    expect(
      wrapper
        .find('Button')
        .at(0)
        .prop('disabled'),
    ).toBe(false));

  it('should pass type prop in the second Button', () =>
    expect(
      wrapper
        .find('Button')
        .at(1)
        .prop('type'),
    ).toBe('button'));

  it('should pass a disabled prop as false in the second Button', () =>
    expect(
      wrapper
        .find('Button')
        .at(1)
        .prop('disabled'),
    ).toBe(false));

  it('should pass "Prev Video" as text in the first button', () =>
    expect(
      wrapper
        .find('Button')
        .at(0)
        .text(),
    ).toBe('Prev Video'));

  it('should pass "Next Video" as text in the second button', () =>
    expect(
      wrapper
        .find('Button')
        .at(1)
        .text(),
    ).toBe('Next Video'));
});
