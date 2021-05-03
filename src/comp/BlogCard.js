import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'


import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  test: {
    border: (blog) => {
      if (blog.category == 'work') {
        return '1px solid red'
      }
    }
  }
})

export default function BlogCard({ blog, handleDelete }) {
  const classes = useStyles(blog)
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(blog.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={blog.title}
          subheader={blog.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { blog.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}