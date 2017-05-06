import React, { Component } from 'react';
import { 
  Container,
  Content,
  ListItem,
  Text, 
} from 'native-base';
import { Actions } from 'react-native-router-flux'

export default class SideNav extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <ListItem>
            <Text>Home</Text>
          </ListItem>
          <ListItem>
            <Text>News&Promotion</Text>
          </ListItem>
          <ListItem>
            <Text>Near Me</Text>
          </ListItem>
          <ListItem onPress={() => Actions.Profile()}>
            <Text>My Account</Text>
          </ListItem>
          <ListItem>
            <Text>History</Text>
          </ListItem>
          <ListItem>
            <Text>About Us</Text>
          </ListItem>
          <ListItem>
            <Text>Contact Us</Text>
          </ListItem>
        </Content>
      </Container>
    )
  }
};

const styles = {
  container: {
    backgroundColor: '#fff',
  }
}
