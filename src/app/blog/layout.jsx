import React from 'react'

const BlogLayout = ({children}) => {
  return (
    <div>
      <h1>Check out our blog articles</h1>
      {children}
    </div>
  )
}

export default BlogLayout