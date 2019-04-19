import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class PragraphDialogue extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.onPClose();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          maxWidth="md"
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Paragraph!</DialogTitle>
          <DialogContent style={{ width: '500px' }}>
            <DialogContentText id="alert-dialog-description">
              <TextField
                autoFocus
                fullWidth
                multiline
                label="Enter Content"
                type="text"
                rows="6"
                margin="dense"
                helperText="Content cannot be empty and it will considered as plain text."
                onChange={e => this.props.Change(e)}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handletextSubmit} color="secondary">
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

PragraphDialogue.propTypes = {
  handletextSubmit: PropTypes.func,
  onPClose: PropTypes.func,
  Change: PropTypes.func,
};

export default PragraphDialogue;
