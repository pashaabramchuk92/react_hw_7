import HeaderLiked from "./HeaderLiked";
import HeaderTabs from "./HeaderTabs";

const Header = () => {
  return (
    <nav className="uk-navbar uk-navbar-container">
      <HeaderTabs />
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
                <HeaderLiked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;