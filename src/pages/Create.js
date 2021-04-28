import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

})

export default function Create() {
  const classes = useStyles()

  return (
    <Container size="sm">
      <Typography
        className={classes.title}
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Blog
      </Typography>

      <Button
        className={classes.btn}
        onClick={() => console.log('you clicked me')}
        type="submit" 
        //color="primary" 
        color="secondary" 
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}>
        Submit
      </Button>

      
    </Container>
  )
}