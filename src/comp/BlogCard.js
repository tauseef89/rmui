import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (blog) => {
      if (blog.category == 'work') {
        return yellow[700]
      }
      if (blog.category == 'food') {
        return green[500]
      }
      if (blog.category == 'it') {
        return pink[500]
      }
      return blue[500]
    },
  }
})

export default function BlogCard({ blog, handleDelete }) {
  const classes = useStyles(blog)
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {blog.category[0].toUpperCase()}
          </Avatar>}
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