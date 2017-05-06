import React, { Component } from 'react';
import {
  TouchableHighlight,
  View,
  StyleSheet,
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
  Text,  
  Footer, 
  FooterTab,
  Button,
  Tabs,
  Tab,
  Drawer
} from 'native-base';
import { Actions } from 'react-native-router-flux'

import SideNav from '../SideNav';

class NewsAndPromotion extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideNav />}
        tapToClose={true}
        openDrawerOffset={0.3}
        panCloseMask={0.3}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent
                onPress={this.openDrawer}
              >
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>News&Promotion</Title>
            </Body>
            <Right>
            </Right>
          </Header>
          <Tabs>
            <Tab heading="All">
            </Tab>
            <Tab heading="Promotions">
            </Tab>
            <Tab heading="News">
            </Tab>
          </Tabs>
          <Content />
          <Footer>
            <FooterTab>
              <Button onPress={() => Actions.Home()}>
                <Icon name="home" />
                <Text style={{fontSize:10}}>Home</Text>
              </Button>
              <Button active>
                <Icon name="paper" />
                <Text style={{fontSize:10}}>News&Promotion</Text>
              </Button>
              <Button onPress={() => Actions.NearMe()}>
                <Icon active name="pin" />
                <Text style={{fontSize:10}}>Near Me</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewsAndPromotion;
