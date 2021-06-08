import { Link } from "react-router-dom"

const HeaderTabs = () => {
  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li>
        {/* className={window.location.pathname === '/' || postsPage ? 'uk-active' : ''}  */}
          <Link
            to='/'
            onClick={() => {
              // setPostsPage(true);
            }}
          >Posts</Link>
        </li>
        <li>
        {/* className={window.location.pathname === '/albums' ? 'uk-active' : ''}  */}
          {/* <Link
            to='/albums'
            onClick={() => {
              setPostsPage(false);
            }}
          >Albums</Link> */}
          Albums
        </li>
      </ul>
    </div>
  )
}

export default HeaderTabs;