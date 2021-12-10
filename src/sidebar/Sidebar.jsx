import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className='sidebarTitle'>About Me</div>
        <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  className='sidebarImg'/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam incidunt qui, quia fuga et accusamus ipsa aperiam natus, libero facilis.</p>
      </div>
      <div className="sidbarItem">
        <div className='sidebarTitle'>Categories</div>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            Life
          </li>
          <li className="sidebarListItem">
            Music
          </li>
          <li className="sidebarListItem">
            style
          </li>
          <li className="sidebarListItem">
            Sport
          </li>
          <li className="sidebarListItem">
            Cinema
          </li>
          <li className="sidebarListItem">
            Tech
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className='sidebarTitle'>Follow Us</div>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square">
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
