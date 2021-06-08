import { connect } from "react-redux";
import { setPagePosts, setPageAlbums } from '../../redux/actions';

const Pagination = ({ pathAlbums, page, total, limit, setPagePosts, setPageAlbums }) => {

  const pageArr = [];
  for (let i = 1; i <= Math.ceil(total/limit); i++) {
    pageArr.push(i);
  }

  const handleClickNext = (e) => {
    e.preventDefault();

    window.location.pathname === pathAlbums
    ? setPageAlbums(page + 1)
    : setPagePosts(page + 1)
  }

  const handleClickPrev = (e) => {
    e.preventDefault();

    window.location.pathname === pathAlbums
    ? setPageAlbums(page - 1)
    : setPagePosts(page - 1)
  }

  const handleClickCurrent = (e) => {
    e.preventDefault();

    window.location.pathname === pathAlbums
    ? setPageAlbums(e.target.getAttribute('value'))
    : setPagePosts(e.target.getAttribute('value'))
  }

  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin="true">
      <li>
        {page > 1 && <a
          href="/"
          onClick={(e) => handleClickPrev(e)}
          // onClick={(e) => {
          //   e.preventDefault();
          //   setPage(page - 1)
          // }}
        ><span className="uk-icon uk-pagination-previous" uk-pagination-previous="true">
        </span></a>}
      </li>
      {pageArr.map(x => {
        const curr = page;
        if(curr === x) {
          return <li key={x} className="uk-active"><span>{x}</span></li>
        }
        return (
          <li key={x}>
            <a
              href="/"
              value={x}
              onClick={(e) => handleClickCurrent(e)}
              // onClick={(e) => {
              //   e.preventDefault();
              //   setPage(e.target.getAttribute('value'));
              // }}
            >{x}</a>
          </li>
        )
      })}
      <li>
        {page < pageArr.length && <a
          href="/"
          onClick={(e) => handleClickNext(e)}
          // onClick={(e) => {
          //   e.preventDefault();
          //   setPage(page + 1)
          // }}
        ><span className="uk-icon uk-pagination-next" uk-pagination-next="true">
          </span></a>}
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    pathAlbums: state.albumsReducer.path,
    total: state.postsReducer.total,
    limit: state.postsReducer.limit,
    page: state.postsReducer.page
  }
}

export default connect(mapStateToProps, { setPagePosts, setPageAlbums })(Pagination);