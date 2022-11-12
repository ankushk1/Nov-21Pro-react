import React from 'react'
import withApiCall from './withApiCall'

const RenderPosts = (props) => {
  console.log(props)
  return (
    <div>
      {props?.data.slice(0,10).map(post => (
        <div>
          <pre>{post.id}</pre>
          <pre>{post.title}</pre>
        </div>
      ))}
    </div>
  )
}

export default withApiCall(RenderPosts, "posts")