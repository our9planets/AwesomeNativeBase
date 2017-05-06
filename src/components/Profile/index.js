import React, { Component } from 'react';
import {
  TouchableHighlight,
  View,
  StatusBar,
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
  Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux'

class Profile extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>My Account</Title>
          </Body>
          <Right>
            <Text>Edit</Text>
          </Right>
        </Header>
        <Content />
      </Container>
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

export default Profile;
