import PropTypes from 'prop-types';
import React from 'react';
import { viewType } from '../../utils/enums';

const ChangeView = ({ view, setView }) => {

  const activeClassGrid = view === viewType.GRID ? 'uk-active' : '';
  const activeClassList = view === viewType.LIST? 'uk-active' : '';  

  return (
    <div className="uk-button-group uk-margin-left">
      <button
        className={"uk-button uk-button-default" + activeClassGrid}
        name='grid'
        onClick={(e) => setView(viewType.GRID)}
      >
        <span uk-icon="icon:  grid"></span>
      </button>
      <button
        className={"uk-button uk-button-default" + activeClassList}
        name='list'
        onClick={(e) => setView(viewType.LIST)}
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