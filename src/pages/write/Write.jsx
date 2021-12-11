import React from 'react'
import './write.css'

const Write = () => {
  return (
    <div className='write'>
      <img src="https://images.pexels.com/photos/10177081/pexels-photo-10177081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='writeImage'/>
      <form className='writeForm'>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus-circle"></i>
          </label>
          <input type="file" id='fileInput' style={{display: "none"}}/>
          <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
        </div>
        <button type='submit' className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write
