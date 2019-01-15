import axios from 'axios';
import { prop } from 'ramda';

import { URL } from './constants';
import { normalizeVideos } from './normalize';

const getVideos = () =>
  axios
    .get(URL)
    .then(prop('data'))
    .then(normalizeVideos)
    .catch(() => ({ error: 'Sorry ☹️ !! We could not get the videos, try again 🔥' }));

export default getVideos;
