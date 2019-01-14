import { URL } from '../constants';

describe('Constants File', () => {
  it('should match with the url of the snapshot', () => expect(URL).toMatchSnapshot());
});
