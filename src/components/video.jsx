import React, { Component } from 'react';
import styles from './video.module.css';
import VideoPage from './videoPage';
import { Route } from 'react-router-dom'

class Video extends Component {
  render() {
    const video = this.props.video
    const snippet = video.snippet;
    const thumbnails = snippet.thumbnails.medium;

    return (
      
      <li>
        <Route path='/page' Component='VideoPage'></Route>
        <a className='thumbnails' href={`https://youtu.be/${video.id}`}>
          <img src={thumbnails.url}></img>
        </a>
        <div className='title-container'>
          <div className='title'>{snippet.title}</div>
          <div className='channel-title'>{snippet.channelTitle}</div>
        </div>
      </li>
      
    );
  }
}

export default Video;