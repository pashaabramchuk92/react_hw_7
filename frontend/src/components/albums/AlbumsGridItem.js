import PropTypes from 'prop-types';
import React from 'react';

import LikeBtn from '../generic/LikeBtn';

const AlbumsGridItem = ({ album, likedAlbums, likeHandler }) => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
        <img
          src="https://picsum.photos/600/400"
          alt=""
          className="uk-cover"
          uk-cover="true"
        />
        <canvas width="600" height="400"></canvas>
        <div className="uk-overlay-primary uk-position-cover"></div>
        <div className="uk-overlay uk-overlay-primary uk-position-bottom">
            <p>{album.title}</p>
        </div>
        <div className="uk-position-top-right uk-overlay">
          <LikeBtn
            id={album.id}
            isLiked={Boolean(likedAlbums.find(x => x.id === album.id))}
            likeHandler={likeHandler}
            albumHeart={true}
          />
        </div>
      </div>
    </div>
  )
}

AlbumsGridItem.propTypes = {
  album: PropTypes.object,
  likedAlbums: PropTypes.array,
}

export default React.memo(AlbumsGridItem);