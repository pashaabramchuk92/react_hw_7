import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLikePosts, getLikeAlbums, resetPosts, resetAlbums } from '../../redux/actions'

import HeaderLiked from "./HeaderLiked";
import HeaderTabs from "./HeaderTabs";

const Header = ({
  path,
  pathPosts,
  pathAlbums,
  likedPosts,
  likedAlbums,
  dislikeHandler,
  getLikePosts,
  getLikeAlbums,
  resetPosts,
  resetAlbums
}) => {
  
  const activeClassPostsTab = path === pathPosts ? 'uk-active' : '';
  const activeClassAlbumsTab = path === pathAlbums ? 'uk-active' : '';

  return (
    <nav className="uk-navbar uk-navbar-container">
      <HeaderTabs     
        activeClassPostsTab={activeClassPostsTab}
        activeClassAlbumsTab={activeClassAlbumsTab}
        resetPosts={resetPosts}
        resetAlbums={resetAlbums}
      />
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className="uk-button uk-icon"
            type="button"
            uk-icon="icon: heart; ratio: 2"
            aria-expanded="false"
          >
          </button>
          <div className="uk-width-large uk-dropdown" uk-dropdown="mode: click">
            <div className="uk-dropdown-grid uk-child-width-1-1@m uk-grid" uk-grid="">
              <div>
                <HeaderLiked
                  pathAlbums={pathAlbums}
                  pathPosts={pathPosts}
                  likedPosts={likedPosts}
                  likedAlbums={likedAlbums}
                  dislikeHandler={dislikeHandler}
                  getLikePosts={getLikePosts}
                  getLikeAlbums={getLikeAlbums}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Header.propTypes = {
//   pathAlbums: PropTypes.string,
//   pathPosts: PropTypes.string,
//   likedPosts: PropTypes.array,
//   likedAlbums: PropTypes.array,
//   setLikePost: PropTypes.func,
//   setLikeAlbum: PropTypes.func,
//   getLikePosts: PropTypes.func,
//   getLikeAlbums: PropTypes.func,
// }

const mapStateToProps = (state) => {
  return {
    pathPosts: state.postsReducer.path,
    pathAlbums: state.albumsReducer.path,
    likedPosts: state.postsReducer.likedPosts,
    likedAlbums: state.albumsReducer.likedAlbums
  }
}

export default connect(mapStateToProps, { getLikePosts, getLikeAlbums, resetPosts, resetAlbums })(Header);