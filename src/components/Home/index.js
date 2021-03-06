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
import { Actions } from 'react-native-router-flux'

import SideNav from '../SideNav';

class Home extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        open={false}
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
              <Title>Home</Title>
            </Body>
            <Right>
            </Right>
          </Header>
          <Content />
          <Footer>
            <FooterTab>
              <Button active>
                <Icon name="home" />
                <Text style={{fontSize:10}}>Home</Text>
              </Button>
              <Button onPress={() => Actions.NewsAndPromotion()}>
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

export default Home;
