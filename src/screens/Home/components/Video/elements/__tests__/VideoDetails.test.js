import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VideoDetails from '../VideoDetails';

describe('Button Style Element', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VideoDetails />);
  });

  it('should create a style structure for the component', () =>
    expect(toJson(wrapper)).toMatchSnapshot());
});
