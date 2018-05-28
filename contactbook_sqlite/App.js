
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity,NavigatorIOS,FlatList
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Swipeout from 'react-native-swipeout';


import AddContacts from './AddContacts.js'

export default class NavigatorIOSApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    //this._onForward = this._onForward.bind(this);
  }
  render() {
    return (
      <NavigatorIOS
initialRoute={{
  component: App,
  title:'Home',
  passProps: {index: 1},
  navigationBarHidden: true,
}}
style={{flex: 1}}
/>
);
}
}

class App extends Component<Props> {
  componentDidMount=() => {
    this.callback()
  }
  componentUnMount=() => {
    this.callback()
  }
  state={
    temp:[],
    names:[],
    e:'',noData:'false',
    item:{name:'',email:'',number:''}

  }
  searchText = (e) => {

      let text = e.toLowerCase()
      let food = this.state.names
      let filteredName = food.filter((item) => {
        var v = item.name.toLowerCase().match(text)
        return v
      })


      if(text===''){
        this.setState({
          temp:food
        })
      }
      else{
        this.setState({temp:filteredName})
      }

    }
_add=()=>{
  var item = this.state.item
this.props.navigator.push({
component: AddContacts,
callback:this.callback,
passProps:{item}
});
}
callback=()=>{
  var templist =[]
  var db = SQLite.openDatabase({name: 'my.db', location: 'default'});
  db.transaction((tx) => {

    tx.executeSql('SELECT * FROM Contacts',[], (tx, results) => {
    console.log("Query completed");

    // Get rows with Web SQL Database spec compliance.

    var len = results.rows.length;
    for (let i = 0; i < len; i++) {
      let row = results.rows.item(i);
      templist.push({name:row.name,number:row.number,email:row.email})
    }
    console.log(templist)
    this.setState({names:templist})
    this.setState({temp:templist})
});

});

}
delete =(item) =>{
  var db = SQLite.openDatabase({name: 'my.db', location: 'default'});
  db.transaction((tx) => {
    tx.executeSql("Delete FROM Contacts where name ='"+item.name+"'")
  });
  this.callback()
}
edit =(item) =>{
  this.props.navigator.push({
  component: AddContacts,
  callback:this.callback,
  passProps:{item}
  });
}


render() {
return (
<View style={styles.container}>
<View style={styles.searchnadd}>
  <TextInput
  style={styles.input}
  secureTextEntry={false}
  placeholder="Username"
  keyboardType="default"
  auto-capitalization={false}
  onChangeText = {this.searchText}
  value={this.state.e}
  />
<TouchableOpacity style={styles.submit} onPress={()=>
    {
      this._add()
    }}>
  <Text style={{  color: 'white'}}>Add</Text>
  </TouchableOpacity>
​
</View>
<View style={{height: '100%'}}>
<FlatList
data={this.state.temp}
renderItem={({item}) =>

<Swipeout  autoClose={true} backgroundColor='white' right={[
  {
    color:'#7a42f4',
    backgroundColor:'white',
    onPress: () => {
      this.delete(item)
    },
    text:'Delete'
  }
,{
  color:'#7a42f4',
  backgroundColor:'white',
  onPress: () => {
    this.edit(item)
  },
  text:'Edit'
}]}>
<View style={{alignItems: 'center',backgroundColor:'white'}}>
<TouchableOpacity  style={{ flex:2,marginTop:10, backgroundColor: '#ffffe6',marginBottom:10,width:'90%',alignContent: 'center',borderRadius:10,borderColor:'gray',borderWidth:1,shadowColor:'gray',shadowOffset: {width: 1, height: 2},shadowOpacity: 0.9,shadowRadius:4}}
  onPress={() =>alert(item.name)}>
<Text style={styles.text} >{item.name}</Text>
<Text style={styles.text} >{item.email}</Text>
<Text style={styles.text} >{item.number}</Text>
</TouchableOpacity>
</View>
</Swipeout>
}

keyExtractor={(item, index) => index.toString()}
/>
</View>

</View>
);
}
}
const styles = StyleSheet.create({
                                 container: {
                                   marginTop:50,
                                 paddingTop: 23,
                                 backgroundColor:'white',
                                 flex: 1
                                 },
                                 input: {
                                 margin: 15,
                                 height: 40,
                                 borderColor: '#7a42f4',
                                 borderWidth: 1,
                                 alignItems: 'center',
                                 width:'68%',
                                 borderRadius: 10,
                                 shadowColor:'#000',shadowOffset: {width: 0, height: 2},shadowOpacity: 0.8,shadowRadius:2
                                 },
                                 searchnadd:{
                                   flexDirection: 'row'
                                 },
                                 submit: {
                                 backgroundColor: '#7a42f4',
                                 padding: 10,
                                 margin: 15,
                                 height: 40,
                                 alignItems: 'center',
                                 width:'15%',
                                 paddingLeft: 10,
                                 borderRadius: 10
                                 },
                                 submitButtonText:{
                                 color: 'white'
                                 },
                               text: {
                               color: '#4f603c',
                               width:'100%',
                               padding:10,
                               fontSize: 20 , fontWeight: 'bold', color: '#7a42f4',
                               alignContent: 'center'
                               }
                                 })
