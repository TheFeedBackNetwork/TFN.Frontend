import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Background from '../components/Background'
import UserAgentContainer from './UserAgentContainer'
import Profile from '../components/Profile';
import MyProfileContainer from './MyProfileContainer';
import ProfileContainer from './ProfileContainer';
import PostRoll from '../components/PostRoll';
import Post from '../components/Post';
import TFNPageEditor from '../components/TFNPageEditor';
import WaveformContainer from './WaveformContainer';
import { changeLocation } from '../actions/location'
import NavigationContainer from './NavigationContainer'
import Player from '../components/Player'
import AppLoader from '../components/AppLoader';
import { Route, withRouter, Switch } from 'react-router-dom';
import DevZoneContainer from'./DevZoneContainer'
import Callback from '../components/Callback';
import silentrenew from '../components/silentrenew'
import * as principleTypes from '../constants/PrincipleTypes'

class App extends React.Component {

  shouldLoadApp() {
    if(this.props.principleType === principleTypes.STANDARD_USER && this.props.meFetched)
    {
      return true
      
    }
    if(this.props.principleType === principleTypes.BASIC) {
      return true;
    }
    return false;
  }

  render() {
    return (
        <div className="page-container">
          
          <NavigationContainer />
          {this.shouldLoadApp() ?
          (<div>
            <Background/>
            <UserAgentContainer />           
            <Route exact path='/:userId/:postId' component={Post} />
            <Route exact path='/' component={WaveformContainer} />
            <Player />
            <Route exact path='/' component={WaveformContainer} />
            
            <Switch>
              <Route exact path='/profile' component={MyProfileContainer} />
              <Route exact path='/devzone' component={DevZoneContainer} />
              <Route exact path='/:userId' component={ProfileContainer} />
            </Switch>
            </div>) :  <AppLoader />}
          <Route exact path='/oidc-callback' component={withRouter(Callback)} /> 
        </div>
    )
  }
}

App.propTypes = {
  
  location: PropTypes.object.isRequired,
  isLoadingUser: PropTypes.bool.isRequired,
  fetchingToken: PropTypes.bool.isRequired,
  fetchedToken: PropTypes.bool.isRequired,
  principleType: PropTypes.string.isRequired,
  meFetched: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { location } = state.location
  const { isLoadingUser } = state.auth
  const { principleType, fetchingToken, fetchedToken } = state.token
  const { meFetched } = state.user
  return {
    location: location,
    isLoadingUser: isLoadingUser,
    principleType: principleType,
    fetchedToken: fetchedToken,
    fetchingToken: fetchingToken,
    meFetched: meFetched,
  }
}

export default connect(mapStateToProps)(withRouter(App));
