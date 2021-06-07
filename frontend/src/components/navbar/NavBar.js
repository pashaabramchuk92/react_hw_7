import { connect } from 'react-redux';
import { setLimit, setOrder, setQuery, setView } from '../../redux/actions';


import SearchBar from './SearchBar';
import Sort from './Sort';
import ShowOnPage from './ShowOnPage';
import ChangeView from './ChangeView';

const NavBar = ({
  isSearching,
  view,
  setIsSearching,
  setLimit,
  setOrder,
  setQuery,
  setView
}) => {
  
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <SearchBar isSearching={isSearching} setIsSearching={setIsSearching} setQuery={setQuery} />
      <Sort setOrder={setOrder} />
      <ShowOnPage setLimit={setLimit} />
      <ChangeView view={view} setView={setView} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      view: state.postsReducer.view,
    }
}

export default connect(mapStateToProps, { setLimit, setOrder, setQuery, setView })(NavBar);