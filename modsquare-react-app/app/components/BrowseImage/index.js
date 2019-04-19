import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import propTypes from 'prop-types';

class BrowseImage extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.onCancel();
  };

  _handleImageChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };
  };

  render() {
    return (
      <div>
        <Dialog
          open
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Browse Image</DialogTitle>
          <DialogContent>
            <img
              src={this.props.pimage}
              style={{ width: '400px', height: '100' }}
            />
          </DialogContent>
          <DialogActions>
            <input type="file" onChange={e => this.props.image(e)} />
            <Button onClick={this.props.handleImageSubmit} color="secondary">
              Upload
            </Button>
            <Button onClick={this.props.onCancel} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

BrowseImage.propTypes = {
  handleImageSubmit: propTypes.func,
  onCancel: propTypes.func,
  pimage: propTypes.string,
};

export default BrowseImage;
