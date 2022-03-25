import {React, memo} from 'react';
import styles from './videoPage.module.css'

const VideoPage = memo(({video, video: {snippet}}) => {
  return (
    <section className={styles.page}>
      <iframe width="100%" height="500px" 
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen />
      <h1 className={styles.title}>{snippet.title}</h1>
      <h1 className={styles.channelTitle}>{snippet.channelTitle}</h1>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
)});

export default VideoPage;