import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Masonry from 'react-masonry-css'
import BlogCard from '../comp/BlogCard'

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:3004/blogs/' + id, {
      method: 'DELETE'
    })
    const newBlogs = blogs.filter(blog => blog.id != id)
    setBlogs(newBlogs)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };
  
  return (
    <Container>
      <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {blogs.map(blog => (
          <div key={blog.id}>
            <BlogCard blog={blog} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>    
  )
}