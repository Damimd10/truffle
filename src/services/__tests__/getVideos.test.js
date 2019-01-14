import axios from 'axios';

import getVideos from '../getVideos';
import { normalizeVideos } from '../normalize';

jest.mock('axios', () => ({
  get: jest.fn().mockImplementation(() => Promise.resolve({ data: { results: 1 } })),
}));

jest.mock('../normalize', () => ({
  normalizeVideos: jest.fn().mockReturnValue('normalizeVideos()'),
}));

describe('getVideos instance', () => {
  beforeEach(async () => {
    await getVideos();
  });

  afterEach(() => {
    axios.get.mockClear();
    normalizeVideos.mockClear();
  });

  it('should call axios.get once', () => expect(axios.get).toHaveBeenCalledTimes(1));

  it('should call axios.get with an specific url', () =>
    expect(axios.get).toHaveBeenCalledWith(
      'https://tm-kitchen-api-alpha.herokuapp.com/videos?api_key=homework&auth_token=1&limit=10&workflow_status=ready',
    ));

  it('should call normalizeVideos once', () => expect(normalizeVideos).toHaveBeenCalledTimes(1));

  it('should call normalizeVideos with data property', () =>
    expect(normalizeVideos).toHaveBeenCalledWith({ results: 1 }));
});
