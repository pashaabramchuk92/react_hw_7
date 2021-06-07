import SearchBar from './SearchBar';
import Sort from './Sort';
import ShowOnPage from './ShowOnPage';
import ChangeView from './ChangeView';

const NavBar = () => {
  
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <SearchBar />
      <Sort />
      <ShowOnPage />
      <ChangeView />
    </div>
  )
}

export default NavBar;