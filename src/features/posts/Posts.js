import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularPosts, selectPosts } from './postsSlice';

import { FaRegComment } from 'react-icons/fa';

const Posts = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, [dispatch]);

  console.log(postsData);

  return (
    <div className='posts'>
      {postsData.posts.length !== 0 ? (
        postsData.posts[0].data.children.map((post) => (
          <div className='posts__post' key={post.data.id}>
            <h2>{post.data.title}</h2>
            {post.data.url.length > 13 ? (
              <img src={post.data.url} alt={`post ${post.data.id} thumbnail`} />
            ) : (
              ''
            )}
            <div className='posts__post-comments'>
              <FaRegComment color='#283f54' size={25} />
              <p>{post.data.num_comments}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Posts;
