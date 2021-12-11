import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import './settings.css'
const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
        <span className="settingsUpdateTitle">
          Update Your Account
        </span>
        <span className="settingsDeleteTitle">
          Delete Your Account
        </span>
        </div>
        <form  className="settingsForm">
          <label >Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <label htmlFor='fileInput'>
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id='fileInput' style={{display: 'none'}} />
          </div>
          <label >Username</label>
          <input type="text" placeholder='Saman' />
          <label >Email</label>
          <input type="Email" placeholder='saman@gmail.com' />
          <label >Password</label>
          <input type="password"  />
          <button type='submit' className='settingsBtn'>Update</button>
        </form>
        
      </div>
        <Sidebar />
    </div>
  )
}

export default Settings
