import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput, Image,} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class LoginView extends Component {
  constructor(props){
    super(props);
    this.state = {
      // switchValue: false,
      text1: '',
      text2: ''
    }
  }
  //login_data
  onChangeInputUsername= (text) => {
    this.setState({text1: text})
  }
  onChangeInputPassword = (text) => {
    this.setState({text2: text})
  }
  //getLogin
  getLogin = () => {
    // Alert.alert("Login", `Username: ${this.state.text1}, Password: ${this.state.text2}`)
    console.log('Fuiste a Home')
    Actions.home({text1: this.state.text1, text2: this.state.text2})
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.tinyLogo}
          source={{
            uri: 'https://www.chinooksd.ca/school/valmarie/ConnectEd/Lists/FeaturedImageLinks/Attachments/1/login%20icon%20parent-01.jpg'
          }}
        />
        <TextInput style={styles.orange}
          onChangeText={(text)=>{this.onChangeInputUsername(text)}}    
        />
        <TextInput style={styles.orange} 
          onChangeText={(text)=>{this.onChangeInputPassword(text)}}/>
        <Button
          onPress={this.getLogin}
          title="INICIAR SESIÓN"
          color="#218CC0"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  tinyLogo: {
    width: 300,
    height: 150,
    marginTop: 60,
    marginBottom: 60,
    backgroundColor: 'black'
  },
  orange: {
    marginBottom: 40,
    width: 300,
    height: 40,
    borderColor: 'orange',
    borderWidth: 4
  }
});