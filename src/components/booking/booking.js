import React, { Component } from 'react'
import axios from 'axios'

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
    constructor (props) {
        super(props)

        // Methods Bindings
        this.handleOnClickCancelButton = this.handleOnClickCancelButton.bind(this)
    }

    /**
     * Handler of Click Cancel Button
     */
    handleOnClickCancelButton (bookingId) {
        // Cancel Researvation
        axios.delete('http://13.231.153.234:3000/bookings/' + bookingId)
            .then((res) => {
                console.log('Cancel Reservation: Successful')
                // TODO: Want to Update Reservation List
            }).catch((err) => {
                console.error('Cancel Reservation: Failed')
            })
    }

    render() {
        const { classes, bookings } = this.props;

        const cards = bookings.map(booking => {
            console.log(JSON.stringify(booking, null, 4))

            const specialities = booking.person.specialities.map(s => s.item).join(", ")
            const locations = booking.person.locations.map(s => s.name).join(", ")

            const profileUrl = "https://s3-ap-northeast-1.amazonaws.com/matchconcierge-profiles/" + booking.person.id + ".jpg"
            return (
                <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={booking.person.profile_photo_url}
                        title="Profile photo"
                    />
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Upcoming booking
                        </Typography>

                        <Typography variant="h5">
                            {booking.person.name}
                        </Typography>
                        <Typography variant="body1">
                            Specialities: {specialities}
                        </Typography>
                        <Typography variant="body2">
                            Date: {booking.availability.date}
                        </Typography>
                        <Typography variant="body2">
                            Time: {booking.availability.start_time} ~ {booking.availability.end_time}
                        </Typography>
                        <Typography variant="body2">
                            Locations: {locations}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => this.handleOnClickCancelButton(booking.id)}>
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