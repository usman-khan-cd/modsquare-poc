/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Uploader from 'containers/Uploader/Loadable';
import Home from 'containers/Home/Loadable';
import Moderator from 'containers/Moderator/Loadable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from '../../components/Header/Loadable';
import { SnackbarProvider } from 'notistack';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (

    <div>
      <ToastContainer autoclose={3000} hideProgressBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Header>
          <Route exact path="/uploader" component={Uploader} />
          <Route exact path="/moderator" component={Moderator} />
        </Header>

        <Route component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </div>

  );
}
