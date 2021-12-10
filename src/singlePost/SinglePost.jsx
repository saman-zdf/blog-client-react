import React from 'react'
import './singlepost.css'



const SinglePost = () => {
  return (
      <div className="post">
        <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="postImage" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet.</span>
          <hr />
          <span className="postDate">
            1 hour ago
          </span>
        </div>
        <p className='postDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem amet at repudiandae autem neque impedit inventore tempora, nisi quasi adipisci illum deserunt eaque distinctio corrupti facere sed a dignissimos provident, ad id eligendi mollitia. Facere molestiae totam recusandae tempore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem amet at repudiandae autem neque impedit inventore tempora, nisi quasi adipisci illum deserunt eaque distinctio corrupti facere sed a dignissimos provident, ad id eligendi mollitia. Facere molestiae totam recusandae tempore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem amet at repudiandae autem neque impedit inventore tempora, nisi quasi adipisci illum deserunt eaque distinctio corrupti facere sed a dignissimos provident, ad id eligendi mollitia. Facere molestiae totam recusandae tempore.
        </p>
      </div>

  )
}

export default SinglePost
