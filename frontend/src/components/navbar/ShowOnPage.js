import PropTypes from 'prop-types';
import React from 'react';

const ShowOnPage = ({ selectedLimit, handleChangeLimit }) => {
  return (
    <select
      className="uk-select uk-width-small uk-margin-left"
      value={selectedLimit}
      onChange={(e) => handleChangeLimit(e)}
    >
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="24">24</option>
    </select>
  )
}

ShowOnPage.propTypes = {
  selectedLimit: PropTypes.number,
  handleChangeLimit: PropTypes.func
}

export default React.memo(ShowOnPage);