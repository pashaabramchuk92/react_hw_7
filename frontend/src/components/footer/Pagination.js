import { connect } from "react-redux";
import { setPagePosts, setPageAlbums } from '../../redux/actions';

const Pagination = ({
  pathAlbums,
  pagePosts,
  totalPosts,
  limitPosts,
  totalAlbums,
  limitAlbums,
  pageAlbums,
  setPagePosts,
  setPageAlbums
}) => {

  const checkLocation = window.location.pathname === pathAlbums;

  const params = {
    pageArr: [],
    page: checkLocation ? pageAlbums : pagePosts,
    total: checkLocation ? totalAlbums : totalPosts,
    limit: checkLocation ? limitAlbums : limitPosts,
    handleClickNext: (e) => {
      e.preventDefault();
      checkLocation ? setPageAlbums(params.page + 1) : setPagePosts(params.page + 1)
    },
    handleClickPrev: (e) => {
      e.preventDefault();
      checkLocation ? setPageAlbums(params.page - 1) : setPagePosts(params.page - 1)
    },
    handleClick: (e, currentPage) => {
      e.preventDefault();
      checkLocation
      ? setPageAlbums(currentPage)
      : setPagePosts(currentPage)
    }
  };

  for (let i = 1; i <= Math.ceil(params.total/params.limit); i++) {
    params.pageArr.push(i);
  }

  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin="true">
      <li>
        {params.page > 1 && 
        <a href="/" onClick={(e) => params.handleClickPrev(e)}>
          <span className="uk-icon uk-pagination-previous" uk-pagination-previous="true"></span>
        </a>}
      </li>
      {params.pageArr.map(x => (
        params.page === x
        ? <li key={x} className="uk-active" style={{fontWeight: 600}}><span>{x}</span></li>
        : <li key={x}><a href="/" onClick={(e) => params.handleClick(e, x)}>{x}</a></li>
      ))}
      <li>
        {params.page < params.pageArr.length && 
        <a href="/" onClick={(e) => params.handleClickNext(e)}>
          <span className="uk-icon uk-pagination-next" uk-pagination-next="true"></span>
        </a>}
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    pathAlbums: state.albumsReducer.path,
    totalPosts: state.postsReducer.total,
    limitPosts: state.postsReducer.limit,
    pagePosts: state.postsReducer.page,
    totalAlbums: state.albumsReducer.total,
    limitAlbums: state.albumsReducer.limit,
    pageAlbums: state.albumsReducer.page,
  }
}

export default connect(mapStateToProps, { setPagePosts, setPageAlbums })(Pagination);