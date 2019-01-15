import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from '../Footer';

describe('Button Style Element', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('should create a style structure for the component', () =>
    expect(toJson(wrapper)).toMatchSnapshot());
});
