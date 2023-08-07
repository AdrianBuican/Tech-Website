import React from 'react'

const BlogLayout = ({children}) => {
  return (
    <div>
      <h1>This is the blog</h1>
      {children}
    </div>
  )
}

export default BlogLayout