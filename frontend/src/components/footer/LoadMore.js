import PropTypes from 'prop-types'; 

const LoadMore = ({ isLoading, setIsLoading, handleLoadMore }) => {
  return (
    <div className="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        onClick={() => {
          handleLoadMore();
          setIsLoading(true);
        }}
      >Load more
        <div
          className="uk-margin-small-left"
          uk-spinner="ratio: 0.6"
          style={{visibility: isLoading ? '' : 'hidden'}}
        ></div>
      </button>
    </div>
  )
}

LoadMore.propTypes = {
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
  handleLoadMore: PropTypes.func
}

export default LoadMore;