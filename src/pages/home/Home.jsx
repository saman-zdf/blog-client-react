import React from 'react'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Posts from '../../post/Posts'
import './home.css'
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
  
      </div>
    </>
  )
}

export default Home

