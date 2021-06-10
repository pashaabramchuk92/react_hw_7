import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom"

const HeaderTabs = ({ postPath, albumsPath }) => {
  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li
          className={
            window.location.pathname === '/' || window.location.pathname.includes(postPath)
            ? 'uk-active'
            : ''}
        >
          <Link to='/'>Posts</Link>
        </li>
        <li className={window.location.pathname === albumsPath ? 'uk-active' : ''}>
          <Link to='/albums'>Albums</Link>
        </li>
      </ul>
    </div>
  )
}

HeaderTabs.propTypes = {
  postPath: PropTypes.string,
  albumsPath: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    postPath: state.postsReducer.path,
    albumsPath: state.albumsReducer.path,
  }
}

export default connect(mapStateToProps)(HeaderTabs);