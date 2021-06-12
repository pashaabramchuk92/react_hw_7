import PropTypes from 'prop-types';

const Pagination = ({ page, pageArr, handleClickPage, handleClickPrev, handleClickNext }) => {

  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin="true">
      <li>
        {page > 1 && 
          <a href="/" onClick={(e) => handleClickPrev(e)}>
          <span className="uk-icon uk-pagination-previous" uk-pagination-previous="true"></span>
        </a>}
      </li>
      {pageArr.map(x => (
        page === x
        ? <li key={x} className="uk-active" style={{fontWeight: 600}}><span>{x}</span></li>
        : <li key={x}><a href="/" onClick={(e) => {e.preventDefault(); handleClickPage(x)}}>{x}</a></li>
      ))}
      <li>
        {page < pageArr.length && 
          <a href="/" onClick={(e) => handleClickNext(e)}>
          <span className="uk-icon uk-pagination-next" uk-pagination-next="true"></span>
        </a>}
      </li>
    </ul>
  )
}

Pagination.propTypes = {
  page: PropTypes.number,
  pageArr: PropTypes.array,
  handleClickPage: PropTypes.func,
  handleClickPrev: PropTypes.func,
  handleClickNext: PropTypes.func,
}

export default Pagination;