import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => (
  <div>
    <p>Find contacts by name</p>
    <input type="text" name="filter" value={filter} onChange={onFilterChange} />
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
