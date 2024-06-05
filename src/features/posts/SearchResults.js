import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchPosts, selectResults } from './postsSlice';

import './SearchResults.css';
import Post from '../../components/Post/Post';

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(selectResults);

  const url = new URL(window.location);
  const q = url.searchParams.get('q');
  console.log(q);

  useEffect(() => {
    dispatch(fetchSearchPosts(q));
  }, [dispatch]);

  // console.log(searchResult.posts[0].data.children);
  console.log(searchResult);

  return <div>SearchResults</div>;
};

export default SearchResults;
