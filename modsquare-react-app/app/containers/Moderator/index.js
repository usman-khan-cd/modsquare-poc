/**
 *
 * Moderator
 *
 *
 */

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectModerator from './selectors';
import reducer from './reducer';
import saga from './saga';
import CustomizedTab from '../../components/CustomTabs/index';
import {
  fetchContentAction,
  putAcceptStatusAction,
  putRejectStatusAction,
  loadMoreAction,
  filterAction,
  changeFilterAction,
} from './actions';
import FeedCard from '../../components/FeedCard/Loadable';
import './style.css';
import { CardLayout } from './style';

export class Moderator extends React.Component {
  state = {
    selectedFeed: {},
    items: [],
    DialogOpen: false,
    page: 1,
    filter: 0,
  };

  componentWillReceiveProps(newProps) {
    if (this.props.moderator.pagination !== newProps.moderator.pagination) {
      this.setState({
        page: newProps.moderator.pagination.nextPage,
      });
    }
  }

  componentDidMount() {
    this.props.fetch();
  }

  acceptFeed = id => {
    this.props.accept(id);
  };

  rejectFeed = id => {
    this.props.reject(id);
  };

  handleLoad = () => {
    this.props.load(this.state.page);
  };

  onFilterTab = type => {
    // eslint-disable-next-line default-case
    switch (type) {
      case 0:
        this.props.onfilterChange('');
        this.props.filter('');
        break;
      case 1:
        this.props.onfilterChange('pending');
        this.props.filter('pending');
        break;
      case 2:
        this.props.onfilterChange('accepted');
        this.props.filter('accepted');
        break;
      case 3:
        this.props.onfilterChange('rejected');
        this.props.filter('rejected');
        break;
    }
  };

  render() {
    const { items } = this.props.moderator;
    return (
      <CardLayout>
        <CustomizedTab onfilter={this.onFilterTab} />
        {items &&
          items.map(item => (
            <FeedCard
              key={item._id}
              itemType={item.type}
              submittedBy={item.user.name}
              image={`${process.env.IMAGES_PATH}${item.image}`}
              type={item.type}
              video={item.video}
              text={item.text}
              status={item.status}
              iframe={item.iframe}
              date={item.create_date}
              accept={() => this.acceptFeed(item.refId)}
              reject={() => this.rejectFeed(item.refId)}
            />
          ))}
        {this.state.page && (
          <button className="mybutton" onClick={this.handleLoad}>
            Load More
          </button>
        )}
        <ToastContainer />
      </CardLayout>
    );
  }
}

Moderator.propTypes = {
  onfilterChange: PropTypes.func,
  filter: PropTypes.func,
  moderator: PropTypes.object,
  fetch: PropTypes.func,
  accept: PropTypes.func,
  reject: PropTypes.func,
  load: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  moderator: makeSelectModerator(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchContentAction()),
    accept: id => dispatch(putAcceptStatusAction(id)),
    reject: id => dispatch(putRejectStatusAction(id)),
    load: page => dispatch(loadMoreAction(page)),
    filter: filter => dispatch(filterAction(filter)),
    onfilterChange: status => dispatch(changeFilterAction(status)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'moderator', reducer });
const withSaga = injectSaga({ key: 'moderator', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Moderator);
