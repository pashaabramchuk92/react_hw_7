import PropTypes from 'prop-types';
import React from 'react';

const HeaderLiked = ({
  pathPosts,
  pathAlbums,
  likedPosts,
  likedAlbums,
  dislikeHandler,
  getLikePosts,
  getLikeAlbums
}) => {
  return (
    <table className="uk-table uk-table-divider uk-table-justify">
      <thead>
        <tr>
          <th>Title</th>
          <th className="uk-text-right">Delete</th>
        </tr>
      </thead>
      <tbody>
        {likedPosts?.length > 0 && 
        <tr style={{border: 'none'}}>
          <th style={{color: '#333', fontWeight: '600'}}>Posts</th>
        </tr>}
        {
          likedPosts?.map(post => (
            <tr key={post.id}>
              <td>
                {
                  post.title.length > 45
                  ? `${post.title.slice(0, 45).trim()}...`
                  : post.title
                }
              </td>
              <td className="uk-text-right">
                <button
                  className="uk-button uk-icon"
                  type="button"
                  uk-icon="icon: close;"
                  onClick={() => {
                    dislikeHandler(pathPosts, post.id, false);
                    getLikePosts(pathPosts);
                  }}
                ></button>
              </td>
            </tr>
          ))
        }

        {likedAlbums?.length > 0 &&
        <tr style={{border: 'none'}}>
          <th style={{color: '#333', fontWeight: '600'}}>Albums</th>
        </tr>}
        {
          likedAlbums?.map(album => (
            <tr key={album.id}>
              <td>
                {
                  album.title.length > 45
                  ? `${album.title.slice(0, 45).trim()}...`
                  : album.title
                }
              </td>
              <td className="uk-text-right">
                <button
                  className="uk-button uk-icon"
                  type="button"
                  uk-icon="icon: close;"
                  onClick={() => {
                    dislikeHandler(pathAlbums, album.id, false);
                    getLikeAlbums(pathAlbums);
                  }}
                ></button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

HeaderLiked.propTypes = {
  pathPosts: PropTypes.string,
  pathAlbums: PropTypes.string,
  likedPosts: PropTypes.array,
  likedAlbums: PropTypes.array,
  dislikeHandler: PropTypes.func,
  getLikePosts: PropTypes.func,
  getLikeAlbums: PropTypes.func
}

export default React.memo(HeaderLiked);