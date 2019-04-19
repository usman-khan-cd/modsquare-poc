/**
 *
 * IframDialogue
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class IframDialogue extends React.Component {
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
          maxWidth="md"
        >
          <DialogTitle id="alert-dialog-title">Url</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              label="Enter website url"
              type="text"
              rows="6"
              margin="dense"
              helperText="url cannot be empty"
              onChange={e => this.props.UrlField(e)}
            />
          </DialogContent>
          <DialogContent>
            <DialogContentText>
              Please enter a valid fully qualified domain url. e.g
              https://reactjs.org/
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

IframDialogue.propTypes = {
  handleUrlSubmit: PropTypes.func,
  onVClose: PropTypes.func,
};

export default IframDialogue;
