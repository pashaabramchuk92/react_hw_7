import PropTypes from 'prop-types';
import React from 'react';

const ChangeView = ({ view, setView }) => {

  const activeClassGrid = view ? 'uk-active' : '';
  const activeClassList = view ? '' : 'uk-active';

  return (
    <div className="uk-button-group uk-margin-left">
      <button
        className={"uk-button uk-button-default" + activeClassGrid}
        onClick={() => setView('grid')}
      >
        <span uk-icon="icon:  grid"></span>
      </button>
      <button
        className={"uk-button uk-button-default" + activeClassList}
        onClick={() => setView('')}
      >
        <span uk-icon="icon:  list"></span>
      </button>
    </div>
  )
}

ChangeView.propTypes = {
  view: PropTypes.string,
  setView: PropTypes.func
}

export default React.memo(ChangeView);