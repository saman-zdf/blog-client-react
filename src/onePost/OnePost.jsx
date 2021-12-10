import React from 'react'
import './onepost.css'
const OnePost = () => {
  return (
    <div className='onePost'>
      <div className="onPostWrapper">
        <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="onePostImg" />
        <h1 className="onePostTitle">
          Lorem ipsum dolor sit.
          <div className="onePostEdit">
            <i className="onePostIcon far fa-edit"></i>
            <i className="onePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="onePostInfo">
          <span className='onePostAuthor'>Author: <b>Saman</b></span>
          <span className='onePostDate'>1 hour ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, corrupti animi nihil quasi, quam autem quae, reiciendis tempora error molestiae deserunt provident aliquam! Inventore cumque tempore quisquam? Ad neque in dignissimos consectetur amet laboriosam quod illo quae exercitationem aliquam dolores saepe, enim, distinctio provident atque tempore harum quaerat ipsum temporibus delectus perspiciatis. Hic, ipsa impedit! Maiores totam accusamus neque quo eum quae! Nisi veritatis ullam eligendi quidem quas quo aperiam odit rerum? Dolore asperiores ipsum hic quod dicta amet. Autem neque ut laudantium nostrum tempora mollitia, labore commodi atque iusto esse dolorum, dolores accusantium! Nesciunt rem accusamus adipisci dolores iusto.</p>
        
      </div>
    </div>
  )
}

export default OnePost
