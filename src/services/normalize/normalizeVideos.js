import { head } from 'ramda';

const normalizeVideos = videoList =>
  videoList.map(currentVideo => ({
    description: currentVideo.description,
    title: currentVideo.title,
    publishDate: currentVideo.publish_date,
    publisher: {
      avatar: currentVideo.created_by_editorial_user.avatar_url,
      email: currentVideo.created_by_editorial_user.email,
      name: currentVideo.created_by_editorial_user.name,
    },
    video: head(currentVideo.associated_video_assets).video_asset.aws_original,
    poster: head(currentVideo.associated_video_assets).video_asset.still_image,
  }));

export default normalizeVideos;
