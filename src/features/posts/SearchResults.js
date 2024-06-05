import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchPosts, selectResults } from './postsSlice';

import './SearchResults.css';
import Post from '../../components/Post/Post';

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(selectResults);

  const url = new URL(window.location);
  const searchQuery = url.searchParams.get('q');

  useEffect(() => {
    dispatch(fetchSearchPosts(searchQuery));
  }, [dispatch, window.location]);

  return (
    <div className='searchResults'>
      {searchResult.loading ? (
        <p>Loading...</p>
      ) : searchResult.posts.length !== 0 ? (
        searchResult.posts.data.children.map((post) => (
          <Post post={post.data} key={post.data.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchResults;
