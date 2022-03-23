import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './videoPage.module.css';
import NavBar from '../navBar/navBar';
import Videos from '../video_list/videos';


const VideoPage = () => {
  const params = useParams();
  const location = useLocation();
  const video = location.state.video.snippet;
  const [videos, setVideos] = useState();

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  // mount 됐을 때, 현재 영상의 제목으로 search 한 video list 우측 사이드바에 출력
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=KR&q=${video.title}&maxResults=25&key=${process.env.REACT_APP_API_KEY}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      result = JSON.parse(result);
      const items = result && result.items ? result.items : [];
      console.log('it', items)
      setVideos(items);
    })
    .catch(error => console.log('error', error));
  },[]);

  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <div className={styles.video}>
            <iframe width="100%" height="100%" 
              src={`https://www.youtube.com/embed/${params.videoId}`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen />
          </div>
          <div className={styles.description}>
            <div className={styles.title}>{video.title}</div>
            <div className={styles.channelName}>{video.channelTitle}</div>
            <div className={styles.description}>{video.description}</div>
          </div>
        </div>
        <div className={styles.listWrapper}>
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;