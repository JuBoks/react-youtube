import React, { memo } from 'react';
import Video from '../video_item/video';
import styles from './videos.module.css'

const Videos = memo(({videos, onClickVideo, display}) => {
  return (
    <ul>
      {
        videos && videos.map(video => {
          return <Video key={video.id} video={video} onClickVideo={onClickVideo} display={display} />
        })
      }
    </ul>
)});

export default Videos;