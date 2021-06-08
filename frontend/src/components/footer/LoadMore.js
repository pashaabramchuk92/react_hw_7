import { connect } from "react-redux";
import { setNext, getMoreData } from '../../redux/actions';

const LoadMore = ({ setNext, getMoreData, config }) => {

  const handleClick = () => {
    setNext(config.next + config.limit);
    getMoreData(config.path, config.next, config.order);
  }

  return (
    <div className="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        onClick={handleClick}
      >Load more
        <div
          className="uk-margin-small-left"
          uk-spinner="ratio: 0.6"
          // style={{visibility: config.isLoading ? '' : 'hidden'}}
        ></div>
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    config: {
      path: state.postsReducer.path,
      next: state.postsReducer.next + state.postsReducer.limit,
      limit: state.postsReducer.limit,
      order: state.postsReducer.order,
    }
  }
}

export default connect(mapStateToProps, { setNext, getMoreData })(LoadMore);