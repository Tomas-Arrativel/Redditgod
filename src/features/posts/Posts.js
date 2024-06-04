import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularPosts, selectPosts } from './postsSlice';

import './Posts.css';
import Post from '../../components/Post/Post';

const Posts = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, [dispatch]);

  return (
    <div className='posts'>
      {postsData.posts.length !== 0 ? (
        postsData.posts[0].data.children.map((post) => (
          <Post post={post.data} key={post.data.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Posts;
