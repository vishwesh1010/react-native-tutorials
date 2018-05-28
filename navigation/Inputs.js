import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {
    state = {

    email: '',
    password: '',
    number: '',
    cpassword: '',
    e:'red',
    p:'red',
    n:'red',
    cp:'red',
    }
    validateEmail = (email) => {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
validatePass = (pass,cpass) => {
  if(cpass != pass || pass=='')
  {
    return false;
  }
  else {
    return true;
  }
}
validateNumber = (num) => {
  if(num.length==10)
  {

    return true;
  }
  else {
    return false;
  }
}
verify = () => {
  var em = this.validatePass(this.state.password,this.state.cpassword)
  this.setState({test:this.state.cpassword+" "+this.state.password})
  if (em==false)
  {
    this.setState({p:'red'})
    this.setState({cp:'red'})
  }
  else {
    this.setState({p:'#7a42f4'})
    this.setState({cp:'#7a42f4'})
  }

}
verifyn = () => {
  var em = this.validateNumber(this.state.number)
  if (em==false)
  {
    this.setState({n:'red'})
  }
  else {
    this.setState({n:'#7a42f4'})
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
    handleCpassword = (text) => {
        this.setState({ cpassword: text })

    }
    handleNumber = (text) => {
      this.setState({number: text })

    }


    erase = () => {
          this.setState({email:'' })
          this.setState({password:'' })
          this.setState({number:''})
          this.setState({cpassword:'' })
          this.setState({e:'red' })
          this.setState({p:'red' })
          this.setState({n:'red'})
          this.setState({cp:'red' })
          this.navigate()
    }
    navigate =() =>
    {
      setTimeout(function(){alert('Sucessfully Registered')},100)
      this.props.navigator.pop()
    }
    validf = () =>
    {
      if(this.state.e=='#7a42f4' && this.state.p=='#7a42f4' && this.state.n=='#7a42f4')
      {
        return true;

      }
    }
    login = () => {
      this.verify()
      this.verifyn()
      if(this.validf()==true)
      {
        this.erase()
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

                <TextInput style = {[styles.input,{borderColor:this.state.cp}]}
                underlineColorAndroid = "transparent"
                secureTextEntry = {true}
                placeholder = "ConfirmPassword"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleCpassword}
                value={this.state.cpassword}
                />

              <TextInput style = {[styles.input,{borderColor:this.state.n}]}
                placeholder ="Number"
              placeholderTextColor = "#9a73ef"
              autoCapitalize ="none"
              onChangeText = {this.handleNumber}
              keyboardType = "numeric"
              value={this.state.number}
              maxLength={10}
              />

                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                () => this.login()
                }>
                <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                </View>
                )
    }
}
export default Inputs

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
