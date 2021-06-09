import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setNextPosts, setNextAlbums, getMoreData } from '../../redux/actions';

const LoadMore = ({ setNextPosts, setNextAlbums, getMoreData, config }) => {
  
  const checkLocation = window.location.pathname === config.pathAlbums;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkLocation
    ? getMoreData(config.pathAlbums, config.nextAlbums, config.orderAlbums)
    : getMoreData(config.pathPosts, config.nextPosts, config.orderPosts)

    setIsLoading(false)
  }, [checkLocation, getMoreData, config.pathAlbums, config.nextAlbums, config.orderAlbums, 
    config.pathPosts, config.nextPosts, config.orderPosts]);

  const handleClick = () => (
    checkLocation
    ? setNextAlbums(config.nextAlbums + config.limitAlbums)
    : setNextPosts(config.nextPosts + config.limitPosts));
  

  return (
    <div className="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        onClick={() => {handleClick(); setIsLoading(true);}}
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

const mapStateToProps = (state) => {
  return {
    config: {
      pathPosts: state.postsReducer.path,
      nextPosts: state.postsReducer.next + state.postsReducer.limit,
      limitPosts: state.postsReducer.limit,
      orderPosts: state.postsReducer.order,

      pathAlbums: state.albumsReducer.path,
      nextAlbums: state.albumsReducer.next + state.albumsReducer.limit,
      limitAlbums: state.albumsReducer.limit,
      orderAlbums: state.albumsReducer.order,
    }
  }
}

export default connect(mapStateToProps, { setNextPosts, setNextAlbums, getMoreData })(LoadMore);