import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ServiceError from '../ServiceError';

describe('Service Error Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ServiceError message="Some message" />);
  });

  it('should display a render of styled component container', () =>
    expect(toJson(wrapper)).toMatchSnapshot());
});
