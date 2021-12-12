import React, { useState, useEffect } from 'react';
import Header from '../../header/Header';
import Sidebar from '../../sidebar/Sidebar';
import Posts from '../../post/Posts';
import axios from 'axios';
import './home.css';
import { useLocation } from 'react-router';

const url = 'http://localhost:5000/api/v1/';
const Home = () => {
  const [posts, setPosts] = useState();
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(url + 'posts' + search);
      setPosts(response.data);
    };
    fetchPost();
  }, [search]);
  console.log(posts);

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
