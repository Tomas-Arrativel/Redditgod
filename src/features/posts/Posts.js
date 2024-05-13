import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularPosts, selectPosts } from './postsSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, [dispatch]);

  console.log(postsData.posts[0].data.children);
  return (
    <div className='posts'>
      {postsData.posts.length !== 0 ? (
        postsData.posts[0].data.children.map((post) => (
          <div className='posts__post' key={post.data.id}>
            {post.data.thumbnail.length > 13 ? (
              <img
                src={post.data.thumbnail}
                alt={`post ${post.data.id} thumbnail`}
              />
            ) : (
              ''
            )}
            <h2>{post.data.title}</h2>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Posts;
