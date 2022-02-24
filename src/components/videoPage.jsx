import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const VideoPage = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location.state)
  return (
    <div>
      <h1>{params.videoId}</h1>
    </div>
  );
};

export default VideoPage;