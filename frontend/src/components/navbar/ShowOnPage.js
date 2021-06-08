import React from 'react';

const ShowOnPage = ({ setLimit }) => {
  return (
    <select
      className="uk-select uk-width-small uk-margin-left"
      onChange={(e) => setLimit(e.target.value)}
    >
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="24">24</option>
    </select>
  )
}

export default React.memo(ShowOnPage);