import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class VideoBrowse extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.onVClose();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Video Submission</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              type="text"
              onChange={e => this.props.UrlField(e)}
              label="Url"
              helperText="Url cannot be empty."
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <DialogContentText>
              Please enter a valid Youtube video url e.g.
              https://www.youtube.com/watch?v=TcMBFSGVi1c
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleUrlSubmit} color="secondary">
              Submit
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

VideoBrowse.propTypes = {
  handleUrlSubmit: PropTypes.func,
  onVClose: PropTypes.func,
};

export default VideoBrowse;
