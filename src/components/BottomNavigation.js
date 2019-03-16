import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";


const styles = {
    root: {
      width: '100%',
      height: 'calc(100vh - 575px)'
    },
};
  

class SimpleBottomNavigation extends Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;
  
      return (
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction component={Link} to="/booking" label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction component={Link} to="/user" label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction component={Link} to="/" label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      );
    }
  }
  
  SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleBottomNavigation);