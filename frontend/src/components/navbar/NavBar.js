import { connect } from 'react-redux';
import { setView } from '../../redux/actions';


import SearchBar from './SearchBar';
import Sort from './Sort';
import ShowOnPage from './ShowOnPage';
import ChangeView from './ChangeView';

const NavBar = ({
  isSearching,
  view,
  pathAlbums,
  setIsSearching,
  setView
}) => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <SearchBar isSearching={isSearching} setIsSearching={setIsSearching} />
      <Sort />
      <ShowOnPage />
      {window.location.pathname === pathAlbums
      ? null
      : <ChangeView view={view} setView={setView} />}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      view: state.postsReducer.view,
      pathAlbums: state.albumsReducer.path,
    }
}

export default connect(mapStateToProps, { setView })(NavBar);