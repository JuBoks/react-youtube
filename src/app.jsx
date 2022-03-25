import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './app.module.css';
import NavBar from './components/navBar/navBar';
import Videos from './components/video_list/videos';
import VideoPage from './components/video_page/videoPage';

function App({youtube}) {
  const [videos, setVideos] = useState();
  // Link To 를 사용하지 않고, 비디오 리스트에서 비디오를 클릭하면 요소 추가되는 방법으로
  const [selectedVideo, setSelectedVideo] = useState();
  const [loading, setLoading] = useState();

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, [])

  const loadingOn = useCallback(() => {
    setLoading(true);
  }, []);

  const loadingOff = useCallback(() => {
    setLoading(null);
  }, []);

  const getMostPopularVideos = useCallback(() => {
    loadingOn();
    selectVideo(null);
    youtube.getMostPopular()
      .then(items => {
        setVideos(items);
        loadingOff();
      });
  }, []);

  useEffect(() => {
    getMostPopularVideos();
  }, []);

  const handleSearch = useCallback((value) => {
    loadingOn();
    selectVideo(null);
    youtube.search(value)
      .then(items => {
        setVideos(items);
        loadingOff();
      })
      .catch(error => console.log);
  }, []);

  return (
      <div className={styles.mainContainer} >
        <NavBar handleSearch={handleSearch} onClickLogo={getMostPopularVideos} />
        {
          loading &&
          <div className={styles.loadingBackground}> 
            <div className={styles.loading}></div>
          </div>
        }
        <section className={styles.content}>
          { 
            selectedVideo && 
            <div className={styles.detail}>
              <VideoPage video={selectedVideo} />
            </div>
          }
          <div className={styles.list}>
            <Videos videos={videos} onClickVideo={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
          </div>
        </section>
      </div>
  );
}

export default App;
