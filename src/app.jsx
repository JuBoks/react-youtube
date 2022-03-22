import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './app.module.css';
import NavBar from './components/navBar/navBar';
import Videos from './components/video_list/videos';

function App() {
  const [videos, setVideos] = useState();
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${process.env.REACT_APP_API_KEY}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      result = JSON.parse(result);
      const items = result && result.items ? result.items : [];
      setVideos(items);
    })
    .catch(error => console.log('error', error));
  }, []);

  
  const handleSearch = useCallback((value) => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=KR&q=${value}&maxResults=25&key=${process.env.REACT_APP_API_KEY}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      result = JSON.parse(result);
      const items = result && result.items ? result.items : [];
      setVideos(items);
    })
    .catch(error => console.log('error', error));
  });

  return (
      <div className={styles.mainContainer} >
        <NavBar handleSearch={handleSearch} />
        <Videos videos={videos} />
      </div>
  );
}

export default App;
