import React, { Component } from 'react';
import styles from './video.module.css';
import VideoPage from './videoPage';
import { Link } from 'react-router-dom'

class Video extends Component {
  render() {
    const video = this.props.video
    const snippet = video.snippet;
    const thumbnails = snippet.thumbnails.medium;
    console.log(snippet.thumbnails)
    return (
      <li>
        <Link to={`/pages/${video.id}`} state={{video}} key={video.id} style={{ color: 'black', textDecoration: 'none', display: 'flex'}}>
          <img src={thumbnails.url}></img>
          <div className={styles.titleContainer}>
            <div className={styles.title}>{snippet.title}</div>
            <div className={styles.channelTitle}>{snippet.channelTitle }</div>
          </div>
        </Link>
      </li>
      
    );
  }
}

export default Video;