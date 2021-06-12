import PropTypes from 'prop-types';
import React from 'react';

const Sort = ({ handleChangeOrder, selectedOrder }) => {

  return (
    <select
      className="uk-select uk-width-small uk-margin-auto-left"
      name="selected"
      value={selectedOrder}
      onChange={(e) => handleChangeOrder(e)}
    >
      <option value="asc">ASC</option>
      <option value='desc'>DESC</option>
    </select>
  )
}

Sort.propTypes = {
  selectedOrder: PropTypes.string,
  handleChange: PropTypes.func
}

export default React.memo(Sort);