import React, { memo } from 'react';
import Video from '../video_item/video';
import styles from './videos.module.css'

const Videos = memo(props => {
  return (
    <ul>
      {
        props.videos && props.videos.map(video => {
          return <Video key={video.id} video={video } />
        })
      }
    </ul>
);
});

export default Videos;