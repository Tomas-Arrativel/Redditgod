import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularPosts, selectPosts } from './postsSlice';

const Posts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const postsItems = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPopularPosts());
    setIsLoading(postsItems.loading);
    setError(postsItems.error);
  }, [dispatch]);

  console.log(postsItems);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>There was a problem...</p>
      ) : (
        postsItems.posts[0].data.children.map((post) => (
          <h2>{post.data.title}</h2>
        ))
      )}
    </div>
  );
};

export default Posts;
