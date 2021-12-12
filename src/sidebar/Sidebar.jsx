import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
const url = 'http://localhost:5000/api/v1';

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const response = await axios.get(url + '/categories');
      setCats(response.data);
    };
    getCats();
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <div className='sidebarTitle'>About Me</div>
        <img
          src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt=''
          className='sidebarImg'
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          incidunt qui, quia fuga et accusamus ipsa aperiam natus, libero
          facilis.
        </p>
      </div>
      <div className='sidbarItem'>
        <div className='sidebarTitle'>Categories</div>
        <ul className='sidebarList'>
          {cats.map((cat) => {
            return (
              <li key={cat._id} className='sidebarListItem'>
                <Link to={`/?category=${cat.name}`} className='link'>
                  {cat.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='sidebarItem'>
        <div className='sidebarTitle'>Follow Us</div>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'>
            <i className='sidebarIcon fab fa-twitter-square'></i>
            <i className='sidebarIcon fab fa-pinterest-square'></i>
            <i className='sidebarIcon fab fa-instagram-square'></i>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
