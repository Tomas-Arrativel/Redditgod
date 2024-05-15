import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  downPost,
  selectDowns,
  upPost,
  selectUps,
  fetchPopularPosts,
  selectPosts,
} from './postsSlice';

import { FaRegComment } from 'react-icons/fa';
import { LuArrowBigDown, LuArrowBigUp } from 'react-icons/lu';

import './Posts.css';

const Posts = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(selectPosts);
  const ups = useSelector(selectUps);
  const downs = useSelector(selectDowns);

  const handleUps = (id) => {
    dispatch(upPost(id));
  };

  const handleDowns = (id) => {
    dispatch(downPost(id));
  };

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

            {/*This are the Votation of the people buttons*/}
            <div className='posts__container'>
              <div className='posts__votes'>
                <LuArrowBigUp
                  onClick={() => handleUps(post.data.id)}
                  color='#2876d0'
                  size={40}
                  fill={
                    ups !== undefined && ups.some((id) => id === post.data.id)
                      ? '#2876d0'
                      : 'transparent'
                  }
                />

                <p>{post.data.ups}</p>

                <LuArrowBigDown
                  onClick={() => handleDowns(post.data.id)}
                  color='#dd3155'
                  size={40}
                  fill={
                    downs !== undefined &&
                    downs.some((id) => id === post.data.id)
                      ? '#dd3155'
                      : 'transparent'
                  }
                />
              </div>

              {/*This is the data of the posts (img and comments)*/}
              <div className='posts__post-info'>
                {post.data.url.length > 13 ? (
                  <img
                    src={post.data.url}
                    alt={`post ${post.data.id} thumbnail`}
                  />
                ) : (
                  ''
                )}
                <div className='posts__post-info__comments'>
                  <FaRegComment color='#283f54' size={25} />
                  <p>{post.data.num_comments}</p>
                </div>
              </div>
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
