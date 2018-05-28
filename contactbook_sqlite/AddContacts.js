import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SQLite from 'react-native-sqlite-storage';


type Props = {};
export default class AddContacts extends Component<Props> {

  state= {
    validate:false,

    user:this.props.item.name,
    email:this.props.item.email,
    numd:this.props.item.number,
    pass:'',
    cpass:'',

    users:'gray',
    emails:'gray',
    numds:'gray',
    passs:'gray',
    tests:'gray'
  }


    errorCB=(err)=> {
      console.log("SQL Error: " + err);
    }

    successCB=() =>{
      console.log("SQL executed fine");
    }

    openCB=() =>{
      console.log("Database OPENED");
    }

    add=(name,email,number)=>{
      var name = this.state.user
      var email = this.state.email
      var number = this.state.numd

      var db = SQLite.openDatabase({name: 'my.db', location: 'default'}, this.successCB, this.errorCB);
      db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Contacts('+
                        'name varchar(255),'+
                        'email varchar(255),'+
                        'number varchar(255))');

        console.log("Query completed");
        tx.executeSql("Insert into Contacts values("+"'"+name+"','"+email+"','"+number+"');")
        console.log("Query completed");

        tx.executeSql('SELECT * FROM Contacts',[], (tx, results) => {
        console.log("Query completed");

        // Get rows with Web SQL Database spec compliance.

        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          console.log(row);
        }
        });
      });
    }

  validateEmail = (email) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  validatePass = (pass,cpass)=>{
    if(pass!=cpass || pass==''){
      return false;
    }
    return true;
  }

  validateMobile = (mobile)=>{
    if(mobile.length==10){
      return true
    }
    else{
      return false
    }
  }

  validateUser = (user)=>{
    if(user==''){
      return false
    }
    else{
      return true
    }
  }
  _edit=()=>{
    var db = SQLite.openDatabase({name: 'my.db', location: 'default'}, this.successCB, this.errorCB);
    db.transaction((tx) => {

      tx.executeSql("UPDATE Contacts SET email="+"'"+this.state.email+"' WHERE name='"+this.props.item.name +"'");
      tx.executeSql("UPDATE Contacts SET number="+"'"+this.state.numd+"' WHERE name='"+this.props.item.name +"'");

      console.log("Hello")

                      console.log(this.props.item.name)

      });
  }


  submit =()=>{
      var email = this.validateEmail(this.state.email)
      var pass = this.validatePass(this.state.pass,this.state.cpass)
      var mobile = this.validateMobile(this.state.numd)
      var user = this.validateUser(this.state.user)
      if(user)[
        this.setState({users:"gray"})
      ]
      else{
        this.setState({users:"red"})
        this.state.validate=false
      }
      if(email==false){
        this.state.emails='red'
        this.state.validate=false
      }
      else{
        this.state.emails='gray'
      }

      if(pass==false){
        this.state.passs='red'
        this.state.validate=false
      }
      else{
        this.state.passs='gray'
      }

      if(mobile==false){
        this.state.numds='red'
        this.state.validate=false
      }
      else{
        this.state.numds='gray'
        this.state.validate=true
      }

      if(this.state.validate==true){
        if(this.props.item.name=='')
        {
        this.add()
        }
        else{
          console.log('Hey')
          this._edit()
        }
        this.props.route.callback()
        this.props.navigator.pop()

      }
      this.setState({test:user.toString()});
  }

  render() {
    return (
      <View
      Style={styles.main}>
        <View style={{justifyContent: 'center',alignItems:'center',marginBottom: 30}} >
            <Text style={{fontSize: 30,color:'#fd6f54'}}>
            Registration
            </Text>
        </View>
        <TextInput
        style={[styles.inputs,{borderColor: this.state.users.toString()}]}
        secureTextEntry={false}
        placeholder="Username"
        keyboardType="default"
        onChangeText={(text) => this.setState({user:text})}
        value={this.state.user}

        />

        <TextInput
        style={[styles.inputs,{borderColor: this.state.emails.toString()}]}
        secureTextEntry={false}
        placeholder="Email"
        keyboardType="default"
        onChangeText={(text) => this.setState({email:text})
      }
        value={this.state.email}/>

        <TextInput
        style={[styles.inputs,{borderColor: this.state.numds.toString()}]}
        secureTextEntry={false}
        placeholder="Mobile Number"
        keyboardType="numeric"
        onChangeText={(text) => this.setState({numd:text})}
        value={this.state.numd}
        maxLength={10}/>

        <TouchableOpacity style={styles.submit}
        onPress={
          ()=>this.submit()
        }>
        <Text style={{  color: 'white'}}>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
        main: {
          margin:10,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fffae8',
          padding: 10,
          marginTop: 50,
        },

        inputs:{
          width:'90%',
          height:50,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius:10,
          padding:3,
          margin:10,
          backgroundColor: '#fff0ed'
        },
        submit:{
          marginTop:20,
          marginLeft: 100,
          width: '30%',
          height:50,
          backgroundColor: '#fd9385',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }
});
