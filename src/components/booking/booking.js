import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    card: {
        margin: theme.spacing.unit,
    },
    appBarPadding: {
        height: 56,
    }
});

class Booking extends Component {
    render() {
        const { classes } = this.props;

        const bookings = [
            {
                person_id: 1,
                person_name: "Erika",
                speciality: "Ramen",
                location: "Shibuya",
                date: "2019-01-22",
                start_time: "16:00",
                end_time: "18:00",
            },
            {
                person_id: 2,
                person_name: "Hiroshi",
                speciality: "Udon",
                location: "Shinjuku",
                date: "2019-01-23",
                start_time: "12:00",
                end_time: "14:00",
            },
            {
                person_id: 3,
                person_name: "Sato",
                speciality: "Ramen",
                location: "Shinjuku",
                date: "2019-01-23",
                start_time: "12:00",
                end_time: "14:00",
            }
        ]

        const cards = bookings.map(booking => {
            const profileUrl = "https://s3-ap-northeast-1.amazonaws.com/matchconcierge-profiles/" + booking.person_id + ".jpg"
            return (
                <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={profileUrl}
                        title="Profile photo"
                    />
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Upcoming booking
                        </Typography>

                        <Typography variant="h5">
                            {booking.person_name}
                        </Typography>
                        <Typography variant="body1">
                            Speciality: {booking.speciality}
                        </Typography>
                        <Typography variant="body2">
                            Date: {booking.date}
                        </Typography>
                        <Typography variant="body2">
                            Time: {booking.start_time} ~ {booking.end_time}
                        </Typography>
                        <Typography variant="body2">
                            Location: {booking.location}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Cancel
                        </Button>
                    </CardActions>                
                </Card>)
        })

        return (
            <div style={{ width: "100%" }}>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                    <Typography variant="h6" color="inherit">
                        My Bookings
                    </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.appBarPadding} />
                { cards }
            </div>
        )
    }
}

Booking.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Booking);