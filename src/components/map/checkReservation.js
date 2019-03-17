import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import profile from "../../static/people1.png";

const DialogTitle = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit
  }
}))(MuiDialogActions);

class CheckReservation extends Component {
  state = {
    open: true
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={this.handleClose}
          />
          <DialogContent>
          <div className = "profile-pic-wrapper" style = {{ display: "flex", justifyContent: "space-around", marginTop: "15px", width: "80%", borderBottom: "1px solid", marginLeft: "auto", marginRight: "auto", paddingBottom: "15px"}}>
              <Avatar src = { profile } style = {{width: "129px", height: "129px"}}/>
              <div className = "profile-text">
                  <div className = "name" style = {{textAlign:"center"}}>
                      藤原あい
                  </div>
                  <div className = "area-title" style = {{textAlign:"center"}}>
                     カバーエリア
                  </div>
                  <div className = "area" style = {{textAlign:"center"}}>
                     東京都港区
                  </div>
              </div>
          </div>

            <Typography gutterBottom>
              東京には本当にたくさんのお店がいっぱいありますから、どのお店に入ったらいいか迷いますよね。
              私は港区のお店を渡り歩いてきましたので、絶対気に入ってもらえるお店に案内できます！
            </Typography>
          </DialogContent>
          <DialogActions>
            <div style={{ display: "flex", widht: "100%", justifyContent: "space-between" }}>
              <div>¥1200</div>
              <Link to = "/makeReservation">
                <Button onClick={this.handleClose} color="primary">
                  予約する
                </Button>
              </Link>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CheckReservation;
