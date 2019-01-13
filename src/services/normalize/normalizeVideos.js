import { head } from 'ramda';

const normalizeAsset = ({ video_asset: { aws_original: url, still_image: poster } }) => ({
  url,
  poster,
});

const normalizeVideos = videoList =>
  videoList.map(currentVideo => ({
    description: currentVideo.description,
    title: currentVideo.title,
    publishDate: currentVideo.publish_date,
    url: currentVideo.slug,
    publisher: {
      avatar: currentVideo.created_by_editorial_user.avatar_url,
      email: currentVideo.created_by_editorial_user.email,
      name: currentVideo.created_by_editorial_user.name,
    },
    asset: normalizeAsset(head(currentVideo.associated_video_assets)),
  }));

export default normalizeVideos;
