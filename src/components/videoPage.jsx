import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Videos from './videos';
import styles from './videoPage.module.css';

const VideoPage = () => {
  const params = useParams();
  const location = useLocation();
  const video = location.state.video.snippet;
  const [videos, setVideos] = useState();
  console.log(video)
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
      console.log(items);
      setVideos(items);
    })
    .catch(error => console.log('error', error));
  },[]);

  return (
    <div className={styles.page}>
      <div>
        <div className={styles.videoWrapper}>
          <iframe width="100%" height="100%" 
            src={`https://www.youtube.com/embed/${params.videoId}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen />
        </div>
        <div>
          <div>{video.title}</div>
          {video.description}
        </div>
      </div>
      <div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default VideoPage;