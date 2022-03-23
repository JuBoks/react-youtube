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
    .then(response => response.json())
    .then(result => result.items)
    .then(items => setVideos(items))
    .catch(error => console.log('error', error));
  }, []);

  
  const handleSearch = useCallback((value) => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&regionCode=KR&q=${value}&maxResults=25&key=${process.env.REACT_APP_API_KEY}`, requestOptions)
    .then(response => response.json())
    .then(result => result.items.map(item => (
      {...item, id: item.id.videoId}
      ))
    )
    .then(items => { setVideos(items); })
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
