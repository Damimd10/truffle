import normalizeVideos from '../normalizeVideos';

const payload = [
  {
    description: 'Some description',
    title: 'Video title',
    publish_date: '10/03/93',
    slug: '/fancy-url',
    created_by_editorial_user: {
      avatar_url: '/url-avatar',
      email: 'myemail@gmail.com',
      name: 'John Doe',
    },
    associated_video_assets: [
      {
        video_asset: {
          aws_original: '/video-url',
          still_image: '/poster-url',
        },
      },
    ],
  },
];

const output = [
  {
    asset: { poster: '/poster-url', url: '/video-url' },
    description: 'Some description',
    publishDate: '10/03/93',
    publisher: { avatar: '/url-avatar', email: 'myemail@gmail.com', name: 'John Doe' },
    title: 'Video title',
    url: '/fancy-url',
  },
];

describe('normalizeVideos instance', () => {
  let result;

  beforeEach(() => {
    result = normalizeVideos(payload);
  });

  it('should transform the backend data into a model to send to the UI', () =>
    expect(result).toEqual(output));
});
