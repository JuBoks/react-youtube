import React, { memo } from 'react';
import styles from './video.module.css';
import { Link } from 'react-router-dom';

const Video = memo( ({video: {id, snippet}}) => {
  // console.log('props', id)
  // const video = props.video;
  // const videoId = video.id.kind ? video.id.videoId : video.id;
  // const snippet = video.snippet;
  // const thumbnails = snippet.thumbnails.medium;

  return (
    <li>
      {/* <Link to={`/pages/${videoId}`} state={{video}} key={video.id} style={{ color: 'black', textDecoration: 'none', display: 'flex', width:'100%'}}> */}
        <img className={styles.thumbnails} src={snippet.thumbnails.medium.url}></img>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{snippet.title}</div>
          <div className={styles.channelTitle}>{snippet.channelTitle }</div>
        </div>
      {/* </Link> */}
    </li>
    
  );
});

export default Video;