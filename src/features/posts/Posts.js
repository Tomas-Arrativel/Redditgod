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
    <div>
      {postsData.posts.length !== 0 ? (
        postsData.posts[0].data.children.map((post) => (
          <div key={post.data.id}>
            <img src={post.data.thumbnail} />
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
