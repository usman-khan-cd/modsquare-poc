import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { filterAction } from '../../containers/Uploader/actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    marginTop: '25px',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 10,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 1,
    outline: 'none',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
      outline: 'none',
    },
  },
  tabSelected: { outline: 'none' },
  typography: {
    padding: theme.spacing.unit * 10,
  },
});

class CustomizedTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    console.log(value);
    this.props.onfilter(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            onClick={this.props.handleAllFilter}
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="All"
          />
          <Tab
            disableRipple
            onClick={this.props.handlePending}
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Pending"
          />
          <Tab
            disableRipple
            onClick={this.props.handleApprove}
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Accepted"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Rejected"
          />
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(CustomizedTabs);
