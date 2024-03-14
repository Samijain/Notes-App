import React from 'react';
import { MdSearch } from 'react-icons/md';
const Search = (props) => {
  return (
    <div className='search'>
      <MdSearch size='1.2rem'></MdSearch>
      <input
        type='text'
        placeholder='type to search'
        onChange={(e) => props.handleSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
