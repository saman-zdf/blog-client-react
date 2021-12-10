import React from 'react'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Post from '../../post/Post'
import './home.css'
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </>
  )
}

export default Home

