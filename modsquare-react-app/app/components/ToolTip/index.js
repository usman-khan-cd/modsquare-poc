import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ImageIcon from '@material-ui/icons/Image';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import TextIcon from '@material-ui/icons/TextFields';
import BrowseImage from '../BrowseImage';

// let spacing = 3;

// window.onscroll(spacing * -3);

const styles = theme => ({
  root: {},
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
  },
});

const actions = [
  { icon: <ImageIcon />, name: 'Image' },
  { icon: <PlayArrowIcon />, name: 'Video' },
  { icon: <TextIcon />, name: 'Text' },
];

class ToolTip extends React.Component {
  state = {
    open: false,
    hidden: false,
  };

  handleVisibility = () => {
    this.setState(state => ({
      open: false,
      hidden: !state.hidden,
    }));
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleImage = () => {
    <BrowseImage />;
  };

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;

    return (
      <div>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
        >
          <SpeedDialAction
            icon={<ImageIcon />}
            tooltipTitle="Image"
            tooltipOpen
            onClick={this.props.onClick}
          />

          <SpeedDialAction
            icon={<PlayArrowIcon />}
            tooltipTitle="Video"
            tooltipOpen
            onClick={this.props.onVideo}
          />
          <SpeedDialAction
            icon={<TextIcon />}
            tooltipTitle="iFrame"
            tooltipOpen
            onClick={this.props.onIframe}
          />
          <SpeedDialAction
            icon={<TextIcon />}
            tooltipTitle="Paragraph"
            tooltipOpen
            onClick={this.props.onParagraph}
          />
        </SpeedDial>
      </div>
    );
  }
}

ToolTip.propTypes = {
  classes: PropTypes.object.isRequired,
  onParagraph: PropTypes.func,
  onIframe: PropTypes.func,
  onVideo: PropTypes.func,
  onClick: PropTypes.func,
};

export default withStyles(styles)(ToolTip);
