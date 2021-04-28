import React, { useEffect, useState } from 'react'

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div>
      {blogs.map(blog => (
        <p key={blog.id}>{ blog.title }</p>
      ))}
    </div>
  )
}