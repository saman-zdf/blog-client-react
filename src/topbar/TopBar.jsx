import './topbar.css';
import image from './profile.jpg';
import { Link } from 'react-router-dom';
const TopBar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'>
          <i className='topIcon fab fa-twitter-square'></i>
          <i className='topIcon fab fa-pinterest-square'></i>
          <i className='topIcon fab fa-instagram-square'></i>
        </i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link'>
              About
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link'>
              Contact
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/write' className='link'>
              Write
            </Link>
          </li>
          <li className='topListItem'>{user && 'Logout'}</li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img src={image} alt='' className='topImage' />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link to='/login' className='link'>
                Login
              </Link>
            </li>
            <li className='topListItem'>
              <Link to='/register' className='link'>
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
};

export default TopBar;
