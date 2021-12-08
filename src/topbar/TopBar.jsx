import './topbar.css'
import image from './profile.jpg'
const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square">
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
        </i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img src={image} alt="" className='topImage' />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default TopBar
