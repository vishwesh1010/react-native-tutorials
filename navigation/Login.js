import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import List from './List.js'
class Login extends Component {

    state = {
    email: '',
    password: '',
    e:'red',
    p:'red',
    }
    validateEmail = (email) => {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }

  validatePass = (pass) => {
  if(pass=='')
  {
    return false;
  }
  else {
    return true;
  }
}

verify = () => {
  var em = this.validatePass(this.state.password)
  if (em==false)
  {
    this.setState({p:'red'})
  }
  else {
    this.setState({p:'#7a42f4'})
  }

}

    handleEmail = (text) => {
         this.setState({ email: text })
         var em = this.validateEmail(this.state.email)
         if (em==false)
         {
          this.setState({e:'red'})
         }
         else {
          this.setState({e:'#7a42f4'})
         }
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    navigate =() =>
    {
      const nav = this.props.navigator

      this.props.navigator.push({
        component:List,
        title: 'List',
        leftButtonTitle:' ',
        rightButtonTitle:"Logout",

        onRightButtonPress: function()
        {
          nav.popToTop()
        }
      });
    }
    validf = () =>
    {
      if(this.state.e=='#7a42f4' && this.state.p=='#7a42f4')
      {
        return true;
      }
    }
    login = () => {
      this.verify()
      if(this.validf()==true)
      {
        this.navigate()
      }
    }

    render(){
        return (
                <View style = {styles.container}>
                <TextInput style = {[styles.input,{borderColor:this.state.e}]}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}
                value={this.state.email}/>

                <TextInput style = {[styles.input,{borderColor:this.state.p}]}
                underlineColorAndroid = "transparent"
                secureTextEntry = {true}
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}
                value={this.state.password}/>

                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                () => this.login()
                }>
                <Text style = {styles.submitButtonText}>Login</Text>
                </TouchableOpacity>
                </View>
                )
    }
  }
export default Login

const styles = StyleSheet.create({
                                 container: {
                                   marginTop:50,
                                 paddingTop: 23,
                                 backgroundColor:'#edfff6',
                                 flex: 1
                                 },
                                 input: {
                                 margin: 15,
                                 height: 40,
                                 borderColor: '#7a42f4',
                                 borderWidth: 1,
                                 alignItems: 'center'
                                 },
                                 submitButton: {
                                 backgroundColor: '#7a42f4',
                                 padding: 10,
                                 margin: 15,
                                 height: 40,
                                 alignItems: 'center'
                                 },
                                 submitButtonText:{
                                 color: 'white'

                                 }
                                 })
