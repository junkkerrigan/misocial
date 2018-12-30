import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import MainHeader from './components/main-layout/MainHeader';
import MainFooter from './components/main-layout/MainFooter';

import { getLocation } from './redux/actions';

const history = createBrowserHistory();

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(getLocation(location))
});

const Routes = ({ setLocation }) => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={
        () => <Redirect to='/home' />
      } />
      <Route>
        <div>
          <Route strict path='/:page' render={
            ({ match }) => {
              setLocation(match.params.page);
              return (
                <MainHeader />
              );
            }
          } />

          <Route strict path='/:page' component={MainFooter} />
        </div>
      </Route>
    </Switch>
  </Router>
);

export default connect(null, mapDispatchToProps)(Routes);

