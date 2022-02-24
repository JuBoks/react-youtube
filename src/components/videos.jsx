import React, { PureComponent } from 'react';
import Video from './video';

class Videos extends PureComponent {
  render() {
    return (
        <ul>
          {
            this.props.videos && this.props.videos.map(video => {
              return <Video key={video.id} video={video} />
            })
          }
        </ul>
    );
  }
}

export default Videos;