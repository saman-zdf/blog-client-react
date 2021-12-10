import React from 'react'
import OnePost from '../../onePost/OnePost'
import Sidebar from '../../sidebar/Sidebar'
import './single.css'
const Single = () => {
  return (
    <div className='single'>
      <OnePost />
      <Sidebar />
    </div>
  )
}

export default Single
