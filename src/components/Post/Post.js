import React from 'react';
import './Post.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  downPost,
  upPost,
  selectDowns,
  selectUps,
} from '../../features/posts/postsSlice';

import fallback from './assets/image-not-found.jpg';

import { FaRegComment } from 'react-icons/fa';
import { LuArrowBigDown, LuArrowBigUp } from 'react-icons/lu';
import ImageWithFallback from '../ImgWithFall/ImgWithFall';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const ups = useSelector(selectUps);
  const downs = useSelector(selectDowns);

  const handleUps = (id) => {
    dispatch(upPost(id));
  };

  const handleDowns = (id) => {
    dispatch(downPost(id));
  };

  return (
    <div className='posts__post' key={post.id}>
      <h2>{post.title}</h2>

      {/*This are the Votation of the people buttons*/}
      <div className='posts__container'>
        <div className='posts__votes'>
          <LuArrowBigUp
            onClick={() => handleUps(post.id)}
            color='#2876d0'
            size={40}
            fill={
              ups !== undefined && ups.some((id) => id === post.id)
                ? '#2876d0'
                : 'transparent'
            }
          />

          <p>{post.ups}</p>

          <LuArrowBigDown
            onClick={() => handleDowns(post.id)}
            color='#dd3155'
            size={40}
            fill={
              downs !== undefined && downs.some((id) => id === post.id)
                ? '#dd3155'
                : 'transparent'
            }
          />
        </div>

        {/*This is the data of the posts (img and comments)*/}
        <div className='posts__post-info'>
          {post.url.length > 13 ? (
            <ImageWithFallback
              alt={`post ${post.id} thumbnail`}
              src={post.url}
              fallbackSrc={fallback}
            />
          ) : (
            // <img src={post.url} alt={`post ${post.id} thumbnail`} />
            ''
          )}
          <div className='posts__post-info__comments'>
            <FaRegComment color='#283f54' size={25} />
            <p>{post.num_comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
