import PropTypes from 'prop-types'; 

import LoadMore from "./LoadMore"
import Pagination from "./Pagination"

const Footer = ({
  isLoading,
  setIsLoading,
  page,
  total,
  limit,
  handleLoadMore,
  handleClickNext,
  handleClickPrev,
  handleClickPage
}) => {

  const pageArr = [];
  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageArr.push(i);
  }
  
  return (
    <>
      <LoadMore
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        handleLoadMore={handleLoadMore}
      />
      <Pagination
        page={page}
        pageArr={pageArr}
        handleClickPage={handleClickPage}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </>
  )
}

Footer.propTypes = {
  isLoading: PropTypes.bool,
  page: PropTypes.number,
  limit: PropTypes.number,
  total: PropTypes.string,
  setIsLoading: PropTypes.func,
  handleLoadMore: PropTypes.func,
  handleClickNext: PropTypes.func,
  handleClickPrev: PropTypes.func,
  handleClickPage: PropTypes.func
}

export default Footer;