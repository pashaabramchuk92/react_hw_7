import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LikeBtn from '../generic/LikeBtn';

const AlbumsGridItem = ({ album, likedAlbums }) => {
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
            albumId={album.id}
            isLikeAlbum={likedAlbums.find(x => x.id === album.id)}
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

const mapStateToProps = (state) => {
  return {
    likedAlbums: state.albumsReducer.likedAlbums,
  }
}

export default connect(mapStateToProps)(React.memo(AlbumsGridItem));