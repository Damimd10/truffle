import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VideoContainer from '../VideoContainer';

describe('Button Style Element', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VideoContainer />);
  });

  it('should create a style structure for the component', () =>
    expect(toJson(wrapper)).toMatchSnapshot());
});
