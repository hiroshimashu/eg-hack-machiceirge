import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios'


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

class FinishBooking extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      booking: null,
      person: null
    }

    // Method Bindings
    this.getPersonDetail = this.getPersonDetail.bind(this)
    this.handleOnClickNextReservation = this.handleOnClickNextReservation.bind(this)
  }

  componentDidMount() {
    const params = this.props.match
    const booking_id = parseInt(params.params.booking_id)

    console.log('bookingId: ' + booking_id)
    axios.get('http://13.231.153.234:3000/bookings/' + booking_id)
      .then((res) => {
        this.setState({booking: res.data})
        this.getPersonDetail(this.state.booking.person_id)
      }).catch((err) => {
      })
  }

  /**
   * Fetch Detail of Person
   * @param {*} personId 
   */
  getPersonDetail(personId) {
    axios.get('http://13.231.153.234:3000/people/' + personId)
      .then((res) => {
        this.setState({person: res.data})
        console.log(JSON.stringify(this.state.person))
      }).catch((err) => {
      })
  }

  handleOnClickNextReservation () {
    this.props.history.push('/')
  }

  render() {
    const imgStyle = {
      height: 'auto',
      width: 300
    }

    return (
      <div style={{ width: "100%" }}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
                Booking Finished
            </Typography>
          </Toolbar>
        </AppBar>
          { this.state.booking ?
          <div style={{paddingTop: 50}}>
            <img
              style={imgStyle}
              src={this.state.booking.person.profile_photo_url}
              title="Profile photo"/>
            <Typography color="textSecondary" gutterBottom style={{paddingTop: 15}}>
              予約の詳細
            </Typography>

            <Typography variant="h5">
                {this.state.booking.person.name}
            </Typography>
            <Typography variant="body2">
                Specialities: { this.state.person ? this.state.person.specialities[0].item : null}
            </Typography>
            <Typography variant="body2">
                Date: {this.state.booking.availability.date}
            </Typography>
            <Typography variant="body2">
                Time: {this.state.booking.availability.start_time} ~ {this.state.booking.availability.end_time}
            </Typography>
            <Typography variant="body2">
                Locations: { this.state.person ? this.state.person.locations[0].name : null}
            </Typography>
            <Button size="small" color="primary" style={{ marginTop: 15, marginBottom: 15 }} onClick={() => this.handleOnClickNextReservation()}>追加で予約する</Button>
          </div>
          : <div></div>
        }
      </div>
    )
  }
}

FinishBooking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FinishBooking);