import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const HeaderTabs = ({ activeClassPostsTab, activeClassAlbumsTab, resetPosts, resetAlbums }) => {

  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className={activeClassPostsTab}>
          <Link to='/' onClick={resetPosts}>Posts</Link>
        </li>
        <li className={activeClassAlbumsTab}>
          <Link to='/albums' onClick={resetAlbums}>Albums</Link>
        </li>
      </ul>
    </div>
  )
}

HeaderTabs.propTypes = {
  activeClassPostsTab: PropTypes.string,
  activeClassAlbumsTab: PropTypes.string,
}

export default HeaderTabs;