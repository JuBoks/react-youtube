import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './app.module.css';
import NavBar from './components/navBar/navBar';
import Videos from './components/video_list/videos';

function App({youtube}) {
  const [videos, setVideos] = useState();
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(() => {
    youtube.getMostPopular()
    .then(items => setVideos(items));
  }, []);

  
  const handleSearch = useCallback((value) => {
    youtube.search(value)
    .then(items => setVideos(items));
  });

  return (
      <div className={styles.mainContainer} >
        <NavBar handleSearch={handleSearch} />
        <Videos videos={videos} />
      </div>
  );
}

export default App;
