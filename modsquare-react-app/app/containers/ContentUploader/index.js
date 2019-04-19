/**
 *
 * ContentUploader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContentUploader from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ContentUploader extends React.Component {
  componentDidMount() {}

  componentWillReceiveProps(newProps) {}

  render() {
    return (
      <div>
        <Helmet>
          <title>ContentUploader</title>
          <meta name="description" content="Description of ContentUploader" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ContentUploader.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contentUploader: makeSelectContentUploader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'contentUploader', reducer });
const withSaga = injectSaga({ key: 'contentUploader', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContentUploader);
