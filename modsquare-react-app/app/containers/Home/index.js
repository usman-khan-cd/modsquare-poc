/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import bgVideo from '../../assets/mp4/bg.mp4';

import './style.css';
/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title> Home </title>{' '}
          <meta name="description" content="Description of Home" />
        </Helmet>
        <div className="container">
          <div className="overlay"> </div>{' '}
          <video
            playsinline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>{' '}
          <div className="masthead">
            <div className="masthead-bg" />
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-12 my-auto">
                  <div className="masthead-content text-white py-5 py-md-0">
                    <h1 className="mb-3">ModSquad POC</h1>
                    <p className="mb-5">
                      Choose their respective role
                      <strong> Go!</strong>
                    </p>
                    <div className="">
                      <div className="link-btn">
                        <Link
                          to="/uploader"
                          className="btn btn-secondary"
                          type="button"
                        >
                          Submit Content
                        </Link>

                        <Link
                          to="/moderator"
                          className="btn btn-secondary"
                          type="button"
                        >
                          Moderator
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
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

const withReducer = injectReducer({
  key: 'home',
  reducer,
});
const withSaga = injectSaga({
  key: 'home',
  saga,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
