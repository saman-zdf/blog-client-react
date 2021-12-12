import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './onepost.css';
const url = 'http://localhost:5000/api/v1/';
const OnePost = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const fetchSinglePost = async () => {
      const response = await axios.get(`${url}posts/${postId}`);

      setPost(response.data.post);
    };
    fetchSinglePost();
  }, [postId]);
  console.log(post);
  return (
    <div className='onePost'>
      <div className='onPostWrapper'>
        {post.photo && <img src={post.photo} alt='' className='onePostImg' />}
        <h1 className='onePostTitle'>
          {post.title}
          <div className='onePostEdit'>
            <i className='onePostIcon far fa-edit'></i>
            <i className='onePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='onePostInfo'>
          <span className='onePostAuthor'>
            Author:{' '}
            <Link to={`/?username=${post.username}`} className='link'>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='onePostDate'>
            {new Date(post.createdAt).toString()}
          </span>
        </div>
        <p className='onePostDesc'>{post.desc}</p>
      </div>
    </div>
  );
};

export default OnePost;
