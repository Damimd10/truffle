import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { isEmpty } from 'ramda';

import { Button, NavigationControlContainer } from '../../elements';

const NavigationControl = ({ prevUrl, nextUrl }) => (
  <NavigationControlContainer>
    <Link to={prevUrl}>
      <Button type="button" disabled={isEmpty(prevUrl)}>
        Prev Video
      </Button>
    </Link>
    <Link to={nextUrl}>
      <Button type="button" disabled={isEmpty(nextUrl)}>
        Next Video
      </Button>
    </Link>
  </NavigationControlContainer>
);

NavigationControl.propTypes = {
  prevUrl: string.isRequired,
  nextUrl: string.isRequired,
};

export default NavigationControl;
