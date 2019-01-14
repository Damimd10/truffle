import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../Home';

const props = {
  location: { key: '123' },
  match: { params: { id: '' } },
};

describe('Home Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it('should', () => {
    console.log(wrapper.debug());
  });
});
