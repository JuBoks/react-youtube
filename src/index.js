import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPage from './components/video_page_link/videoPage';
import Youtube from './service/youtube';

const youtube = new Youtube(process.env.REACT_APP_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App youtube={youtube} />} /> 
        <Route path="/pages" element={<VideoPage />}>
          <Route path=":videoId" element={<VideoPage />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);