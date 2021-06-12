import PropTypes from 'prop-types';
import AlbumsGridItem from "./AlbumsGridItem";

const AlbumsGrid = ({ albums, likedAlbums, likeHandler }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {
        albums?.length > 0
        ? albums.map(album => 
          <AlbumsGridItem
            key={album.id}
            album={album}
            likedAlbums={likedAlbums}
            likeHandler={likeHandler}
          />)
        : <div className="uk-align-center">Sorry, albums not found :(</div>
      }
    </div>
  )
}

AlbumsGrid.propTypes = {
  albums: PropTypes.array,
  likedAlbums: PropTypes.array,
  likeHandler: PropTypes.func
}

export default AlbumsGrid;