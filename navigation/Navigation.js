import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View,StyleSheet,TouchableOpacity,TouchableHighLight} from 'react-native';
import Inputs from './Inputs.js'
import Login from './Login.js'

export default class Navigaton extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'HomePage',

        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends React.Component {
  static propTypes = {
      title: PropTypes.string,
    navigator: PropTypes.object.isRequired,
  };

  _onsignUp = () => {
    this.props.navigator.push({
      component:Inputs,
      title: 'SignUp ',
    });
  }

  _onlogIn = () => {
    this.props.navigator.push({
      component:Login,
      title: 'Login',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{margin:80,fontSize:40,color:'red',justifyContent: 'center'}}>Welcome {this.props.title}</Text>

        <TouchableOpacity
        style = {styles.Button} onPress={this._onsignUp}>
        <Text style = {styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.Button} onPress={this._onlogIn}>
        <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
                                 container: {
                                   marginTop:50,
                                 paddingTop: 23,
                                 backgroundColor:'#edfff6',
                                 flex: 1
                                 },
                                 Button: {
                                 backgroundColor: '#7a42f4',
                                 padding: 10,
                                 margin: 15,
                                 height: 40,
                                 alignItems: 'center'
                                 },
                                 buttonText:{
                                 color: 'white'

                                 }
                                 })
