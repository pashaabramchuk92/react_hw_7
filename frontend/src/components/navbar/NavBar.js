import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Sort from './Sort';
import ShowOnPage from './ShowOnPage';
import ChangeView from './ChangeView';

const NavBar = ({
  view,
  limit,
  order,
  query,
  isSearching,
  handleChangeOrder,
  handleChangeLimit,
  handleSearch,
  setView
}) => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <SearchBar isSearching={isSearching} searchValue={query} handleSearch={handleSearch}/>
      <Sort handleChangeOrder={handleChangeOrder} selectedOrder={order}/>
      <ShowOnPage selectedLimit={limit} handleChangeLimit={handleChangeLimit}/>
      {view && <ChangeView view={view} setView={setView} />}
    </div>
  )
}

NavBar.propTypes = {
  view: PropTypes.string,
  limit: PropTypes.number,
  order: PropTypes.string,
  query: PropTypes.string,
  isSearching: PropTypes.bool,
  handleChangeOrder: PropTypes.func,
  handleChangeLimit: PropTypes.func,
  handleSearch: PropTypes.func,
  setView: PropTypes.func
}

export default NavBar;