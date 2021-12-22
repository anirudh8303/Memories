import React, {useEffect} from 'react'
import "./Post.css"

function Post({creator, title, time, location, msg, image})
 {
    return (
        <div style={{marginBottom: "10px", marginRight:"35px"}}>
            <div class="container">
  <div className="card row">
    <div className="card_image">
      <img src={image} alt="image" />
    </div>
    <div className="card_details">
      <h1>{title}</h1>
      <p>
      {creator}
      </p>
      <p>
        {location}
      </p>
      <p style={{fontFamily:"cursive",}}>
        {msg}
      </p>
      <p>
        {time.slice(0,10)}
      </p>
    </div>
  </div>
</div>
        </div>
    )
}

export default Post
