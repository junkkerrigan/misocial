import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import MainLayout from './components/main-layout/MainLayout';
import Home from './components/home/Home';

import { getLocation } from './redux/actions';

const history = createBrowserHistory();

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(getLocation(location))
});

const Routes = ({ setLocation }) => (
  <Router history={history}>
    <>
      <Route exact path='/' render={
        () => <Redirect to='/home' />
      } />
      <Route strict path='/:page' render={
        ({ match }) => {
          setLocation(match.params.page);
          return null;
        }
      } />
      <MainLayout>
        <Route exact path='/home' component={Home} />
        <Route strict path='/home/' render={
          () => <Redirect to='/home' />
        } />
      </MainLayout>
    </>
  </Router>
);

export default connect(null, mapDispatchToProps)(Routes);

