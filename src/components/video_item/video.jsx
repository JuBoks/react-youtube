import React, { memo } from 'react';
import styles from './video.module.css';
import { Link } from 'react-router-dom';

const Video = memo( ({video, video: {id, snippet}, onClickVideo, display}) => {
  const displayStyles = display === 'list' ? styles.list : styles.grid;

  return (
    <li className={displayStyles} onClick={() => onClickVideo(video)}>
      {/* <Link to={`/pages/${id}`} state={{video}} key={id} style={{ color: 'black', textDecoration: 'none', display: 'flex', width:'100%'}}> */}
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