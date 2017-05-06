import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  TouchableHighlight,
  View,
  StatusBar,
} from 'react-native';
import { 
  Container,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Title, 
  Content, 
  ListItem, 
  Text, 
  CheckBox, 
  Footer, 
  Button,
  FooterTab,
  Tabs,
  Tab,
  Drawer
} from 'native-base';
import {Scene, Router} from 'react-native-router-flux';

import Home from './Home';
import NewsAndPromotion from './News&Promotion';
import Profile from './Profile';
import NearMe from './NearMe';

class Navigation extends Component {
  
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home" component={Home} title="Home" hideNavBar/>
          <Scene key="NewsAndPromotion" component={NewsAndPromotion} title="News&Promotion"/>
          <Scene key="NearMe" component={NearMe} title="NearMe"/>
          <Scene key="Profile" component={Profile} title="Profile"/>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

export default Navigation;
