import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
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

  return (
    <Container>
      <Grid container spacing={3}>
        {blogs.map(blog => (
          <Grid item xs={12} md={6} lg={4} key={blog.id}>
            <BlogCard blog={blog} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>    
  )
}