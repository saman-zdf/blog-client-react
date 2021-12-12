import React from 'react';
import SinglePost from '../singlePost/SinglePost';
import './posts.css';

const Post = ({ posts }) => {
  return (
    <div className='posts'>
      {posts &&
        posts.map((p) => {
          return <SinglePost key={p._id} post={p} />;
        })}
    </div>
  );
};

export default Post;
