import axios from 'axios';
import { prop } from 'ramda';

import { URL } from './constants';
import { normalizeVideos } from './normalize';

const getVideos = () =>
  axios
    .get(URL)
    .then(prop('data'))
    .then(normalizeVideos);

export default getVideos;
