import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Course = (props) => {
    console.log(props)
    console.log(props.course.fields.courseDescription)
    return(
        <div>
        { props.course ? (
            <Card>
                <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                image={props.course.fields.coursePicture.fields.file.url}
                title={props.course.fields.courseTitle} />
                <CardContent>
                    <Typography gutterBottom variant="h5" components="h2">
                        {props.course.fields.courseTitle}
                    </Typography>
                    <Typography variant="body2">
                        {props.course.fields.courseDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" href={props.course.fields.url} target="_blank">
                        Go To Course
                    </Button>
                </CardActions>
            </Card>
        ) : null }
        </div>
    )
}

export default Course

