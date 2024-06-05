import React from 'react';

const SearchResults = () => {
  const url = new URL(window.location);
  const q = url.searchParams.get('q');
  console.log(q);

  return <div>SearchResults</div>;
};

export default SearchResults;
